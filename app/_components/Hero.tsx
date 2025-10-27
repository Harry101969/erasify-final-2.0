import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pencil, Users, Zap } from "lucide-react";
const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-black via-gray-900 to-[#00172d] pt-32 text-center pb-16">
      <div className="container">
        <div className="flex items-baseline justify-center pb-14  ml-12 ">
          <h2 className="text-white text-center border  border-white px-3 p-2 rounded-full">
            See What's New | <span className="text-sky-400"> AI Diagram</span>
          </h2>
        </div>
        <div className="text-center space-y-8 max-w-3xl mx-auto pl-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold pl-6 tracking-tight">
            The Whiteboard for
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Engineering Teams
            </span>
          </h1>
          <p className="text-xl text-muted-foreground pl-6">
            Create diagrams, wireframes, and architecture designs in a
            collaborative space built for engineering teams.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="ml-2 bg-white text-black hover:text-black hover:bg-slate-200"
            >
              Try Eraser for Free{" "}
              <ArrowRight className="text-black ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
