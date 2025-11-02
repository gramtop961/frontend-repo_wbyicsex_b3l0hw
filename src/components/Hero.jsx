import { User, Linkedin, Instagram, Facebook, Mail, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-300">
              <User className="h-3.5 w-3.5" />
              Personal Portfolio
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Aashik Khatri
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Aspiring computer scientist focused on cybersecurity. Passionate about
              building secure systems, empowering students through STEM, and growing
              into a founder of a cybersecurity firm.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <dt className="text-slate-400">Date of Birth</dt>
                <dd className="mt-1 font-medium text-white">2006-06-21</dd>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <dt className="text-slate-400">Gender</dt>
                <dd className="mt-1 font-medium text-white">Male</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://your-website-or-linktree.example"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" /> Website
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-0 bg-gradient-to-tr from-blue-500/20 via-sky-400/10 to-indigo-500/10 blur-3xl"></div>
            <div className="relative z-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-xs text-slate-400">Class 10 GPA</p>
                  <p className="mt-1 text-2xl font-bold">3.45</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-xs text-slate-400">Class 11 GPA</p>
                  <p className="mt-1 text-2xl font-bold">2.94</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-xs text-slate-400">Class 12 GPA</p>
                  <p className="mt-1 text-2xl font-bold">3.25</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                  <p className="text-xs text-slate-400">Focus</p>
                  <p className="mt-1 text-2xl font-bold">Cybersecurity</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                "Security is not a product, but a process." – Bruce Schneier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
