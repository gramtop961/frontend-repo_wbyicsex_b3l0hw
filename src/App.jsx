import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FuturePlans from "./components/FuturePlans";
import { User } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800">
              <User className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="text-sm font-semibold text-white">Aashik Khatri</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#future" className="hover:text-white">Future</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Education />
        <Experience />
        <FuturePlans />
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Aashik Khatri. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
