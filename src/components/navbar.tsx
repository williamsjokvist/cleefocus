import Link from "next/link";

export function NavBar() {
  return (
    <div className="text-white mt-[18px] mx-[18px] rounded-3xl fixed top-0 z-50 w-full max-w-[calc(100vw-36px)] flex items-center justify-between px-8 py-4 text-2xl bg-black bg-opacity-60 backdrop-blur-sm">
      <img
        src="/logo.png"
        alt="Cleefocus logo"
        className="max-w-[200px] h-[42px]"
      />
      <nav className="flex gap-12 items-center font-medium">
        <Link href="/">Hem</Link>
        <Link href="/">Tjänster</Link>
        <Link href="/album">Album</Link>
        <button
          type="button"
          className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-1 bg-[#fff] text-[#696969] rounded-3xl font-light transition duration-200 ease-linear"
        >
          Kontakt
        </button>
      </nav>
    </div>
  );
}
