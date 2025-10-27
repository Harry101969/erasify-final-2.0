import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header({ user }: any) {
  console.log(user);
  const { users }: any = useKindeBrowserClient();
  console.log(users);

  return (
    <div className="flex justify-end items-center w-full h-16 px-6 bg-white shadow-md">
      {/* Search bar */}
      <div className="flex items-center border rounded-md p-2 w-64">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 flex-grow outline-none text-sm text-gray-700"
        />
      </div>

      {/* User image */}
      <div className="mx-4">
        {user?.picture ? (
          <img
            src={user?.picture}
            alt="User-Icon"
            width={30}
            height={30}
            className="rounded-full"
          />
        ) : (
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        )}
      </div>

      {/* Invite button */}
      <Button className="gap-2 flex items-center text-sm h-8 hover:bg-blue-700 bg-blue-600 text-white">
        <Send className="h-4 w-4" />
        Invite
      </Button>
    </div>
  );
}

export default Header;
