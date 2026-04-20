import { X } from "lucide-react";

type SurveyBannerProps = {
  href: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  onClose: () => void;
};

function SurveyBanner({
  href,
  title = "Help improve this project",
  description = "Take a short survey and share feedback about this project.",
  ctaLabel = "Go To Survey",
  onClose,
}: SurveyBannerProps) {
  return (
    <section className="fixed left-0 right-0 top-20 z-40 border-b border-[#d8b15a]/30 bg-[#fff7e3] text-[#161d2e] shadow-[0_10px_24px_rgba(22,29,46,0.08)]">
      <div className="relative mx-auto grid w-full max-w-7xl gap-3 px-4 py-3 pr-14 sm:px-6 sm:pr-16 md:grid-cols-[1fr_auto_auto] md:items-center md:px-10 md:pr-10 lg:px-16 lg:pr-16">
        <div className="space-y-0.5">
          <h2 className="text-sm font-semibold md:text-base">{title}</h2>
          <p className="max-w-2xl text-xs leading-5 text-[#161d2e]/75 md:text-sm">
            {description}
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#161d2e] px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#0f1728] md:text-sm"
        >
          {ctaLabel}
        </a>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 inline-flex size-9 items-center justify-center rounded-full text-[#161d2e]/65 transition-colors hover:bg-[#161d2e]/8 hover:text-[#161d2e] sm:right-6 md:static md:self-center"
          aria-label="Close survey banner"
        >
          <X className="size-4" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

export default SurveyBanner;
