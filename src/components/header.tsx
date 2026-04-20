import { SearchBar } from "./SearchBar";

function Header() {
  return (
    <header className="header-nav fixed left-0 right-0 top-0 z-50 bg-[#11182c]">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6 md:px-10 xl:px-16">
        <button
          type="button"
          className="text-[22px] font-bold text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Boiler Access Map
        </button>

        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
