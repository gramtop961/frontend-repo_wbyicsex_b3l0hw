import { Shield, Rocket } from "lucide-react";

export default function FuturePlans() {
  return (
    <section id="future" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-lg border border-slate-800 bg-slate-900 p-2">
            <Shield className="h-5 w-5 text-cyan-400" />
          </span>
          <h2 className="text-2xl font-bold">Future Goals</h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow">
          <p className="text-slate-300">
            I aim to pursue Computer Science with a concentration in Cybersecurity. My
            long-term vision is to found a cybersecurity firm that helps people and
            organizations stay safe, build resilient systems, and advocate for digital
            literacy.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-semibold">Areas I want to master</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Network security and threat modeling</li>
                <li>Secure software development</li>
                <li>Incident response and digital forensics</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="font-semibold">What I’m building towards</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Open-source security tools and learning content</li>
                <li>Internships and hands-on projects in security</li>
                <li>Launching a security-focused startup</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
            <Rocket className="h-4 w-4 text-cyan-400" />
            Always learning, always shipping.
          </div>
        </div>
      </div>
    </section>
  );
}
