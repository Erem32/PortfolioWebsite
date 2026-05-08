import { siteData } from "../data/siteData";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-200 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-slate-500">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Technologies I use
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {siteData.skills.map((group) => (
            <article
              key={group.category}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-950">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
