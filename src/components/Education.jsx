import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-lg border border-slate-800 bg-slate-900 p-2">
            <GraduationCap className="h-5 w-5 text-emerald-400" />
          </span>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        <ol className="relative border-s-l border-slate-800">
          <li className="ms-6 pb-10">
            <span className="absolute -start-3.5 mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
              <GraduationCap className="h-4 w-4 text-emerald-400" />
            </span>
            <h3 className="text-lg font-semibold">Class 12 (Science Faculty)</h3>
            <p className="mt-1 text-slate-300">GPA 3.25</p>
            <p className="mt-2 text-sm text-slate-400">Focused on core sciences and technology foundations, with a growing interest in systems security.</p>
          </li>
          <li className="ms-6 pb-10">
            <span className="absolute -start-3.5 mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
              <GraduationCap className="h-4 w-4 text-emerald-400" />
            </span>
            <h3 className="text-lg font-semibold">Class 11 (Science Faculty)</h3>
            <p className="mt-1 text-slate-300">GPA 2.94</p>
            <p className="mt-2 text-sm text-slate-400">Strengthened fundamentals in physics and mathematics while exploring computing.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute -start-3.5 mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
              <GraduationCap className="h-4 w-4 text-emerald-400" />
            </span>
            <h3 className="text-lg font-semibold">Class 10</h3>
            <p className="mt-1 text-slate-300">GPA 3.45</p>
            <p className="mt-2 text-sm text-slate-400">Built strong study habits and an early interest in technology and STEM.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
