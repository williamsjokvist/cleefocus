import Link from "next/link";
import InstagramIcon from "~icons/mdi/instagram";

export function Footer() {
  return (
    <footer className="bg-sgray text-white text-center">
      <div className="p-12 flex flex-wrap gap-12 justify-around items-start">
        <Link
          href="https://www.instagram.com/cleefocus/"
          target="_blank"
          className="text-white flex items-center gap-3 text-xl"
        >
          <InstagramIcon width={45} height={45} className="bg-gradient-insta rounded-xl p-[2px]" /> Följ oss på Instagram
        </Link>
        <dl className="text-left text-xl flex flex-col gap-5">
          <dt className="text-3xl font-extrabold">Tjänster</dt>
          <dd>Solcellsrengöring</dd>
          <dd>Taktvätt</dd>
          <dd>Marktvätt</dd>
          <dd>Takmålning</dd>
        </dl>

        <dl className="text-left text-xl flex flex-col gap-5">
          <dt className="text-3xl font-extrabold">Kontakt</dt>
          <dd>info@cleefocus.com</dd>
          <dd>036-911 90</dd>
        </dl>
      </div>

      {/* <img
        className="w-[250px] h-[120px]"
        src="https://cleefocus.com/wp-content/uploads/2023/12/rot-rut-avdrag-removebg-preview.png"
        alt="rot"
      /> */}
      <div className="flex flex-wrap gap-4 justify-between items-center py-12 px-16 border-t-[1px] border-white">
        <img
          src="/logo.png"
          alt="Cleefocus logo"
          className="max-w-[200px] h-[42px]"
        />
        <span>Copyright 2024 © CleeFocus AB</span>
      </div>
    </footer>
  );
}
