import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Pencil, Users, Zap } from "lucide-react";
export default function page() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
      {/* Features Section */}
      <section className="py-16 bg-muted/50 pl-5 bg-gradient-to-b from-black via-gray-900 to-[#00172d]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 pl-5 ">
            <div className="space-y-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Pencil className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Collaboration</h3>
              <p className="text-muted-foreground">
                Work together in real-time with your team members on diagrams
                and designs.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Team Libraries</h3>
              <p className="text-muted-foreground">
                Create and share reusable components across your entire
                organization.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Experience smooth and responsive diagramming with our optimized
                canvas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-[#00172d]">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Trusted by Engineering Teams Worldwide
            </h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-70">
              {/* Replace these with actual company logos */}
              <div className="h-8 w-32 bg-muted rounded"></div>
              <div className="h-8 w-32 bg-muted rounded"></div>
              <div className="h-8 w-32 bg-muted rounded"></div>
              <div className="h-8 w-32 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
