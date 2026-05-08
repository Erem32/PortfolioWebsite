import { siteData } from "../data/siteData";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Let&apos;s connect
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Reach me by email, LinkedIn, or GitHub.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteData.profile.email}`}
              className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Email
            </a>
            <a
              href={siteData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              LinkedIn
            </a>
            <a
              href={siteData.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-600">{siteData.profile.email}</p>
        </div>
      </div>
    </section>
  );
}
