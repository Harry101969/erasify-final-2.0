"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Warning from "@editorjs/warning";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "../../dashboard/_components/FileList";

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: "Document Name",
        level: 2,
      },
      id: "123",
      type: "header",
    },
    {
      data: {
        level: 4,
      },
      id: "1234",
      type: "header",
    },
  ],
  version: "2.8.1",
};

function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const ref = useRef<EditorJS | null>(null);
  const updateDocument = useMutation(api.files.updateDocument);
  const [isEditorInitialized, setIsEditorInitialized] = useState(false);
  const [lastSavedContent, setLastSavedContent] = useState<string | null>(null); // Track last saved document content

  // Debounce save function
  const debounceSave = useCallback(
    debounce((contentString: string) => {
      updateDocument({
        _id: fileId,
        document: contentString,
      }).then(
        () => {
          setLastSavedContent(contentString); // Update the last saved content
          toast.success("Document Auto-Saved!");
        },
        (error) => {
          toast.error("Server error while saving!");
          console.error(error);
        }
      );
    }, 5000), // 5-second debounce for saving
    [updateDocument, fileId]
  );

  // Initialize the editor when fileData is available
  useEffect(() => {
    if (fileData && !isEditorInitialized) {
      initEditor();
    }
  }, [fileData, isEditorInitialized]);

  // Handle manual save trigger
  useEffect(() => {
    if (onSaveTrigger) {
      onSaveDocument();
    }
  }, [onSaveTrigger]);

  // Autosave every 2 minutes if content has changed
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkAndSaveDocument();
    }, 120000); // 2 minutes = 120,000 ms

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
        header: {
          //@ts-ignore
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a Header",
          },
        },
        list: {
          //@ts-ignore
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        paragraph: {
          //@ts-ignore
          class: Paragraph,
          config: {
            placeholder: "Type your text here...",
          },
        },
        warning: {
          class: Warning,
          config: {
            titlePlaceholder: "Warning title",
            messagePlaceholder: "Warning message",
          },
        },
      },
      holder: "editorjs",
      data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
      onChange: () => {
        console.log("Editor content changed");
        if (ref.current) {
          ref.current
            .save()
            .then((currentContent) => {
              const currentContentString = JSON.stringify(currentContent);
              // Trigger debounced save if content changed
              if (currentContentString !== lastSavedContent) {
                debounceSave(currentContentString);
              }
            })
            .catch((error) => console.error("Error saving content:", error));
        }
      },
    });
    ref.current = editor;
    setIsEditorInitialized(true);
  };

  const checkAndSaveDocument = () => {
    if (ref.current) {
      ref.current.save().then((currentContent) => {
        const currentContentString = JSON.stringify(currentContent);
        // Check if the current content differs from the last saved content
        if (currentContentString !== lastSavedContent) {
          console.log("Changes detected. Autosaving...");
          debounceSave(currentContentString);
        } else {
          console.log("No changes detected. Skipping autosave.");
        }
      });
    }
  };

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          const contentString = JSON.stringify(outputData);
          console.log("Manual save triggered. Article data: ", outputData);
          updateDocument({
            _id: fileId,
            document: contentString,
          }).then(
            () => {
              setLastSavedContent(contentString); // Update the last saved content
              toast.success("Document saved!");
            },
            (e) => {
              toast.error("Server error while saving!");
              console.error(e);
            }
          );
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  return (
    <div>
      <div id="editorjs" className="ml-20"></div>
    </div>
  );
}

// Debounce function
function debounce(func: (...args: any[]) => void, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default Editor;
