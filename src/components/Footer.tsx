import { MapPinned } from "lucide-react";

function Footer() {
  return (
    <footer className="footer flex w-full items-center gap-3 px-6 py-4 md:px-10 xl:px-16">
      <MapPinned className="size-6 shrink-0 text-white" />
      <p className="text-[24px] leading-none font-semibold text-white">BAM</p>
    </footer>
  );
}

export default Footer;
