
import React from "react";
import { Pencil, Users, Zap, ArrowRight, Menu } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
// Header Component
const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <img
          src="https://cdn.prod.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc37149_Logo%20Mark%20%2B%20Name.svg"
          alt="logo"
          className="h-8 w-auto"
        />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 hover:text-blue-400"
              >
                <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
              </div>
              <div
                className="hidden rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:block"
              >
                <RegisterLink>Register</RegisterLink>
              </div>
            </div>

            <button className="block rounded bg-gray-800 p-2.5 text-gray-300 transition hover:text-blue-400 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#00172d] pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center pb-8 sm:pb-12 lg:pb-14">
          <div className="text-white text-center border border-white/30 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all">
            See What's New | <span className="text-cyan-400 font-semibold"> AI Diagram</span>
          </div>
        </div>
        
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            The Whiteboard for
            <span className="block sm:inline bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
              {" "}Engineering Teams
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Create diagrams, wireframes, and architecture designs in a
            collaborative space built for engineering teams.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 sm:pt-6">
            <button className="group bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              Try Eraser for Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#00172d] via-gray-900 to-black relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Powerful Features
              </h2>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
                Everything you need to create stunning diagrams and collaborate effectively
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {/* Feature Card 1 */}
              <div className="group space-y-4 sm:space-y-5 p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-blue-600/50">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-600/30">
                  <Pencil className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Real-time Collaboration
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Work together in real-time with your team members on diagrams and designs.
                </p>
              </div>
              
              {/* Feature Card 2 */}
              <div className="group space-y-4 sm:space-y-5 p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-cyan-500/50">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                  <Users className="h-7 w-7 sm:h-8 sm:w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Team Libraries
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Create and share reusable components across your entire organization.
                </p>
              </div>
              
              {/* Feature Card 3 */}
              <div className="group space-y-4 sm:space-y-5 p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-blue-400/50 sm:col-span-2 lg:col-span-1">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-400/30">
                  <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-blue-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Lightning Fast
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Experience smooth and responsive diagramming with our optimized canvas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-[#00172d]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 lg:space-y-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Trusted by Engineering Teams Worldwide
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-32 sm:h-14 sm:w-40 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg flex items-center justify-center hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 border border-gray-700 hover:border-blue-600/30 backdrop-blur-sm"
                  >
                    <span className="text-gray-400 text-sm font-medium">Company {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#00172d] via-gray-900 to-black border-t border-blue-900/20 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Your Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
