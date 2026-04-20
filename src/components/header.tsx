import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerOffset = 96;

  const navItems = [
    { href: "#map", label: "Map" },
    { href: "#harrisonHallCard", label: "Harrison Hall" },
    { href: "#windsorDiningCourtCard", label: "Windsor Dining Court" },
    { href: "#dudleyLambertusCard", label: "Dudley Lambertus" },
    { href: "#honorsSouthCard", label: "Honors South" },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const target = document.getElementById(sectionId);

    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="header-nav fixed left-0 right-0 top-0 z-50 bg-[#11182c] text-white">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6 md:px-10 xl:px-16">
        <button
          type="button"
          className="text-[22px] font-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Boiler Access Map
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(href);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18 18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#202d51] shadow-xl lg:hidden"
        >
          <nav className="mx-auto flex w-full flex-col px-6 py-4 md:px-10">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block py-3 text-center text-base font-medium text-white/90 transition-colors hover:bg-black/20 hover:text-white"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(href);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
