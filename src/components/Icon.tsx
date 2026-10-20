type IconProps = {
  name: "arrow-right" | "arrow-up-right" | "github" | "mail" | "linkedin";
  className?: string;
};

export function Icon({ name, className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {name === "arrow-right" && <path d="M4 12h16m-6-6 6 6-6 6" />}
      {name === "arrow-up-right" && <path d="M6 18 18 6M6 6h12v12" />}
      {name === "mail" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}
      {name === "linkedin" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
        </>
      )}
      {name === "github" && (
        <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3-.3 6-1.5 6-6a4.5 4.5 0 0 0-1-3c.3-1 .3-2 0-3 0 0-1 0-3 1a11 11 0 0 0-8 0C6 3 5 3 5 3c-.3 1-.3 2 0 3a4.5 4.5 0 0 0-1 3c0 4.5 3 5.7 6 6a3.5 3.5 0 0 0-1 3v4" />
      )}
    </svg>
  );
}
