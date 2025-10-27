"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import React, { useEffect, useState } from "react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import SideNav from "./_components/SideNav";
import { FileListContext } from "@/app/_context/FilesListContext";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const convex = useConvex();
  const [fileList_, setFileList_] = useState();
  const { user }: any = useKindeBrowserClient();

  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    if (!result?.length) {
      router.push("teams/create");
    }
  };

  return (
    <FileListContext.Provider value={{ fileList_, setFileList_ }}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-72 fixed">
          <SideNav />
        </div>

        {/* Main content */}
        <div className="flex-1 ml-72 w-full overflow-y-auto">{children}</div>
      </div>
    </FileListContext.Provider>
  );
}

export default DashboardLayout;
