import { siteData } from "../data/siteData";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label={`${siteData.profile.name} home`}
          className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white"
        >
          MM
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {siteData.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
