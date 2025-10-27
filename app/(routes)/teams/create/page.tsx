"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { MdPeopleAlt } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { createTeam } from "@/convex/teams";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const router = useRouter();
  const { user }: any = useKindeBrowserClient();
  const createTeam = useMutation(api.teams.createTeam);
  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      console.log(resp);
      if (resp) {
        router.push("/dashboard");
        toast("Team Created Successfully!");
      }
    });
  };

  return (
    <div className="px-6 md:px-16 my-16">
      <Image src={"/logo-black.png"} alt="logo" width={200} height={200} />
      <div className="flex flex-col items-center mt-8 ">
        <div className="flex items-center bg-green-100 rounded-md px-3 py-1 mt-3">
          <MdPeopleAlt className="text-green-700 h-5" />{" "}
          <span className="text-green-700 ml-2">Team Name</span>
        </div>
        <h2 className="font-bold text-[40px] py-3">
          What should we call your team?
        </h2>{" "}
        <h2 className="text-gray-500">
          You can always change this later from settings.
        </h2>
        <div className="mt-7 w-[40%]">
          <label className="text-gray-500 ml-1">Team Name</label>
          <Input
            placeholder="Team Name"
            className="mt-3"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
          />
        </div>
        <Button
          className="bg-blue-500 mt-9 w-[30%] hover:bg-blue-600"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={createNewTeam}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
};

export default CreateTeam;
