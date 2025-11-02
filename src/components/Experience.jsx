import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-lg border border-slate-800 bg-slate-900 p-2">
            <Briefcase className="h-5 w-5 text-indigo-400" />
          </span>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow">
            <h3 className="text-lg font-semibold">Thinkniti — Non-profit Organization</h3>
            <p className="mt-1 text-sm text-slate-400">STEM Outreach Volunteer</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Introduced STEM education to students under Class 10 across 20+ schools.</li>
              <li>Guided and consulted 2,000+ students on the importance of STEM for future careers.</li>
              <li>Organized hands-on sessions to make learning engaging and practical.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow">
            <h3 className="text-lg font-semibold">Kurautey — Local News Outlet</h3>
            <p className="mt-1 text-sm text-slate-400">Media Manager</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Managed content planning and publishing workflows for local news.</li>
              <li>Coordinated media assets and maintained a consistent brand voice.</li>
              <li>Collaborated with the team to improve reach and audience engagement.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
