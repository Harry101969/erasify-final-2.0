"use client";

import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";
import Canvas from "../_components/Canvas";
function Workspace({ params }: { params: { fileId: string } }) {
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | any>();
  const [fileId, setFileId] = useState<string | any>();
  const convex = useConvex();

  useEffect(() => {
    // Directly use params to get fileId
    if (params.fileId) {
      setFileId(params.fileId);
    }
  }, [params]);

  useEffect(() => {
    if (fileId) {
      getFileData();
    }
  }, [fileId]);

  const getFileData = async () => {
    try {
      const result = await convex.query(api.files.getFileById, {
        //@ts-ignore
        _id: fileId,
      });
      setFileData(result);
    } catch (error) {
      console.error("Error fetching file data:", error);
    }
  };

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-screen">
          {fileId && (
            <Editor
              onSaveTrigger={triggerSave}
              fileId={fileId}
              //@ts-ignore
              fileData={fileData}
            />
          )}
        </div>

        {/* Whiteboard/canvas */}
        <div className="h-screen border-l">
          {/* <Canvas
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData}
          /> */}
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
