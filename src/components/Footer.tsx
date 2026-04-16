import { MapPinned } from "lucide-react";

function Footer() {
  return (
    <footer className="footer flex w-full flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 xl:px-16">
      <div className="flex items-center gap-3">
        <MapPinned className="size-6 shrink-0 text-white" />
        <p className="text-[24px] leading-none font-semibold text-white">BAM</p>
      </div>
      <p className="flex flex-wrap items-center gap-1.5 text-sm text-white/80">
        <span>Designed with</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="shrink-0 fill-[#ff6b6b]"
          aria-hidden="true"
        >
          <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z" />
        </svg>
        <span>by</span>
        <a
          href="https://dillp1.github.io"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
        >
          Dill
        </a>
      </p>
    </footer>
  );
}

export default Footer;
