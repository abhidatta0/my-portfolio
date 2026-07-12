import { useState } from "react";
import { X } from "lucide-react";

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem("dime-banner-dismissed") === "true";
  });

  if (dismissed) return null;

  const handleDismiss = () => {
    localStorage.setItem("dime-banner-dismissed", "true");
    setDismissed(true);
  };

  return (
    <div className="flex items-center justify-center gap-3 bg-linear-to-r from-blue-500 to-cyan-400 text-white text-md py-2.5 px-4 relative">
      <a
        href="https://dime.abhirupdatta.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5"
      >
        <span>
          Try{" "}
          <span className="relative inline-block font-semibold underline decoration-wavy underline-offset-3">
            Dime
          </span>{" "}
          — split bills across currencies, my new side project
        </span>
      </a>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white "
      >
        <X className="size-6" />
      </button>
    </div>
  );
}
