import Link from "next/link";
import InstagramIcon from "~icons/mdi/instagram";

export function Footer() {
  return (
    <footer className="bg-sgray text-white text-center">
      <div className="p-12 sm:flex-row flex flex-wrap gap-12 sm:justify-around sm:items-start">
        <div>
          <Link
            href="https://www.instagram.com/cleefocus/"
            target="_blank"
            className="text-white flex items-center gap-3 text-xl"
          >
            <InstagramIcon width={45} height={45} className="bg-gradient-insta rounded-xl p-[2px]" /> Följ oss på Instagram
          </Link>
          <img
            className="mt-8 w-[250px] h-[120px] pointer-events-none"
            src="https://cleefocus.com/wp-content/uploads/2023/12/rot-rut-avdrag-removebg-preview.png"
            alt="rot"
          />
        </div>
        <dl className="relative text-left text-xl flex flex-col gap-5">
          <dt className="text-3xl font-extrabold">Tjänster</dt>
          <dd className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
            <span className='indent-4 inline-block'>Solcellsrengöring</span>
          </dd>
          <dd className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
            <span className='indent-4 inline-block'>Taktvätt</span>
          </dd>
          <dd className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
            <span className='indent-4 inline-block'>Takmålning</span>
          </dd>
          <dd className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
            <span className='indent-4 inline-block'>Fågelskydd</span>
          </dd>
          <dd className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
            <span className='indent-4 inline-block'>Marktvätt</span>
          </dd>
        </dl>

        <dl className="text-left text-xl flex flex-col gap-5">
          <dt className="text-3xl font-extrabold">Kontakt</dt>
          <dd>info@cleefocus.com</dd>
          <dd>036-911 90</dd>
          <dd>Vardagar: 07:00–16:00</dd>
          <dd>Helger: 10:00–14:00</dd>
        </dl>
      </div>
      <div className='relative flex flex-wrap gap-4 justify-between items-center py-12 px-16 before:bg-gradient-orange before:content-[""] before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full'>
        <img
          src="/logo.png"
          alt="Cleefocus logo"
          className="max-w-[200px] h-[42px]"
        />
        <small className='text-lg'>Copyright 2024 © CleeFocus AB</small>
      </div>
    </footer>
  );
}
