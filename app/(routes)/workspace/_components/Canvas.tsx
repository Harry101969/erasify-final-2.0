// "use client";
// import React, { useState, useEffect } from "react";
// import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
// import { FILE } from "../../dashboard/_components/FileList";
// import { useMutation } from "convex/react";
// import { api } from "@/convex/_generated/api";
// const Canvas = ({
//   onSaveTrigger,
//   fileId,
//   fileData,
// }: {
//   onSaveTrigger: any;
//   fileId: any;
//   fileData: FILE;
// }) => {
//   const [whiteBoardData, setWhiteBoardData] = useState<any>();

//   const saveWhiteboard = () => {
//     updateWhiteBoard({
//       _id: fileId,
//       whiteboard: JSON.stringify(whiteBoardData),
//     }).then((resp) => console.log(resp));
//   };
//   const updateWhiteBoard = useMutation(api.files.updateWhiteboard);
//   useEffect(() => {
//     onSaveTrigger && saveWhiteboard();
//   }, [saveWhiteboard]);
//   return (
//     <div style={{ height: "670px" }}>
//       {fileData && (
//         <Excalidraw
//           theme="light"
//           initialData={{
//             elements: fileData?.whiteboard && JSON.parse(fileData.whiteboard),
//           }}
//           onChange={(excalidrawElements, appState, files) =>
//             setWhiteBoardData(excalidrawElements)
//           }
//           UIOptions={{
//             canvasActions: {
//               saveToActiveFile: false,
//             },
//           }}
//         >
//           {/* //Optional */}
//           {/* <MainMenu>
//     <MainMenu.DefaultItems.ClearCanvas/>
//     <MainMenu.DefaultItems.SaveAsImage/>
//     <MainMenu.DefaultItems.ChangeCanvasBackground/>

//    </MainMenu> */}
//           {/* Add the custom welcome screen */}
//           {/* <WelcomeScreen.Hints.Menubar/>
//     <WelcomeScreen.Hints.Toolbar/>
//    </WelcomeScreen>    */}
//           <WelcomeScreen />
//         </Excalidraw>
//       )}
//     </div>
//   );
// };

// export default Canvas;
//The useful one if the image upload and retrieve doesn't work!
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "../../dashboard/_components/FileList";

const Canvas = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) => {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();
  const [lastSavedContent, setLastSavedContent] = useState<string | null>(null); // Track the last saved content
  const updateWhiteBoard = useMutation(api.files.updateWhiteboard);

  // Debounced save function
  const debounceSave = useCallback(
    debounce((content: any) => {
      updateWhiteBoard({
        _id: fileId,
        whiteboard: JSON.stringify(content),
      })
        .then(() => {
          setLastSavedContent(JSON.stringify(content)); // Update last saved content
          toast.success("Whiteboard Auto-Saved!");
        })
        .catch((error) => {
          toast.error("Error saving whiteboard!");
          console.error(error);
        });
    }, 5000), // 5-second debounce for saving
    [updateWhiteBoard, fileId]
  );

  // Save changes manually or on trigger
  useEffect(() => {
    if (onSaveTrigger) {
      saveWhiteboard();
    }
  }, [onSaveTrigger]);

  // Save changes every 2 minutes if content has changed
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkAndSaveWhiteboard();
    }, 120000); // 2 minutes = 120,000 ms

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const checkAndSaveWhiteboard = () => {
    if (whiteBoardData) {
      const contentString = JSON.stringify(whiteBoardData);
      if (contentString !== lastSavedContent) {
        debounceSave(whiteBoardData);
      } else {
        console.log("No changes detected. Skipping auto-save.");
      }
    }
  };

  const saveWhiteboard = () => {
    if (whiteBoardData) {
      const contentString = JSON.stringify(whiteBoardData);
      updateWhiteBoard({
        _id: fileId,
        whiteboard: contentString,
      })
        .then(() => {
          setLastSavedContent(contentString); // Update last saved content
          toast.success("Whiteboard saved!");
        })
        .catch((error) => {
          toast.error("Error saving whiteboard!");
          console.error(error);
        });
    }
  };

  return (
    <div style={{ height: "670px" }}>
      {fileData && (
        <Excalidraw
          theme="light"
          initialData={{
            elements: fileData?.whiteboard
              ? JSON.parse(fileData.whiteboard)
              : [],
          }}
          onChange={(elements) => {
            setWhiteBoardData(elements);
            const contentString = JSON.stringify(elements);
            if (contentString !== lastSavedContent) {
              debounceSave(elements); // Trigger save on change
            }
          }}
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
            },
          }}
        >
          <WelcomeScreen />
        </Excalidraw>
      )}
    </div>
  );
};

// Debounce function
function debounce(func: (...args: any[]) => void, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default Canvas;
