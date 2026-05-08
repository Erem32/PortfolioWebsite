import { siteData } from "../data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          (c) {new Date().getFullYear()} {siteData.profile.name}. Built with
          React, Vite, and Tailwind CSS.
        </p>
        <p>{siteData.profile.location}</p>
      </div>
    </footer>
  );
}
