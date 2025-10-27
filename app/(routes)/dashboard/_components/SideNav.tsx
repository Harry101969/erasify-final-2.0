import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";

import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import SideNavBottomSection from "./SideNavBottomSection";
import SideNavTopSection from "./SideNavTopSection";
import { TEAM } from "./SideNavTopSection";
import { FileListContext } from "@/app/_context/FilesListContext";
export default function SideNav() {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const convex = useConvex();
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [totalFiles, setTotalFiles] = useState<Number>();
  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    if (!activeTeam?._id) {
      toast("Please select a team before creating a file!");
      return;
    }

    createFile({
      fileName: fileName,
      teamId: activeTeam?._id || "",
      createdBy: user?.emal,
      archive: false,
      document: "",
      whiteboard: "",
    }).then(
      (resp) => {
        if (resp) {
          getFiles();
          toast("File Created Successfully!");
        }
      },
      (e) => {
        toast("Error Creating File!");
      }
    );
  };
  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      //@ts-ignore
      teamId: activeTeam?._id,
    });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length);
  };
  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);
  return (
    <div className=" h-screen fixed w-72 border-r border-[1px] p-6 flex flex-col">
      <div className="flex-1">
        {" "}
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SideNavBottomSection
          onFileCreate={onFileCreate}
          totalFiles={totalFiles}
        />
      </div>
    </div>
  );
}
