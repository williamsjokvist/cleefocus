import Link from "next/link";
import { Button } from "./ui/button";

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
        <Link href="/album">Galleri</Link>
        <Button className="px-6 py-1">
          Kontakt
        </Button>
      </nav>
    </div>
  );
}
