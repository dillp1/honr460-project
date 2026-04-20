"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const headerOffset = 96;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const cards = [
    { href: "#dudleyLambertusCard", label: "Dudley Lambertus" },
    { href: "#harrisonHallCard", label: "Harrison Hall" },
    { href: "#honorsSouthCard", label: "Honors College & Residences South" },
    { href: "#windsorDiningCourtCard", label: "Windsor Dining Court" },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const target = document.getElementById(sectionId);

    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full md:w-64">
        <Input
          type="search"
          placeholder="Search..."
          readOnly
          onClick={() => setOpen(true)}
          className="w-full cursor-pointer pr-10 md:pr-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 hover:bg-white/15 transition-colors h-10 md:h-auto"
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none rounded border bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground bg-white/10 border-white/20 text-white/60 hidden md:inline-flex">
          ⌘F
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search buildings..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Buildings">
              {cards.map(({ href, label }) => (
                <CommandItem
                  key={href}
                  onSelect={() => {
                    scrollToSection(href);
                    setOpen(false);
                  }}
                >
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
