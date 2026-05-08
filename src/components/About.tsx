import { siteData } from "../data/siteData";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-slate-500">About</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Python developer building toward backend and full-stack work.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            {siteData.profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
