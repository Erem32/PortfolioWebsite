import { siteData } from "../data/siteData";
import type { TimelineItem } from "../types";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="flex gap-4 border-t border-slate-200 py-5 first:border-t-0 first:pt-0 last:pb-0">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-slate-200 bg-white p-2 text-sm font-bold text-slate-900">
        {item.logoSrc ? (
          <img
            src={item.logoSrc}
            alt={`${item.organization} logo`}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          item.logoText
        )}
      </div>
      <div>
        <h4 className="font-semibold text-slate-950">{item.title}</h4>
        <p className="mt-1 text-sm font-medium text-slate-700">
          {item.organization}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {item.period}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-slate-500">Portfolio</p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              {siteData.profile.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-slate-700">
              {siteData.profile.title}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {siteData.profile.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {siteData.profile.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Contact
              </a>
            </div>
          </div>

          <div id="about" className="scroll-mt-24 rounded-lg border border-slate-200 p-6">
            <p className="text-sm font-semibold text-slate-500">About</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Python developer building toward backend and full-stack work.
            </h2>
            <div className="mt-4 space-y-3 text-base leading-7 text-slate-600">
              {siteData.profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-10">
          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-lg border border-slate-200 p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-950">Experience</h3>
                <span className="text-sm font-medium text-slate-500">
                  Career path
                </span>
              </div>
              {siteData.experience.map((item) => (
                <TimelineCard
                  key={`${item.organization}-${item.title}`}
                  item={item}
                />
              ))}
            </section>

            <section className="rounded-lg border border-slate-200 p-6">
              <h3 className="mb-5 text-lg font-bold text-slate-950">
                Education
              </h3>
              {siteData.education.map((item) => (
                <TimelineCard
                  key={`${item.organization}-${item.title}`}
                  item={item}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
