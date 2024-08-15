"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "~/components/ui/carousel";
import InstagramIcon from "~icons/mdi/instagram";
import { StickyScroll } from "../components/ui/sticky-scroll";

export default function Home() {
  return (
    <main>
      <Intro />
      <Features />
      <Partners />
      <InstagramGallery />
      {/* <section className="bg-white w-screen h-screen relative text-black">
        <h2 className="font-bold text-6xl">Vad vi gör</h2>
        <img
          src="https://cleefocus.com/wp-content/uploads/2023/08/IMG_7528-2-768x512.jpg"
          className="w-auto h-[500px] rounded-xl"
        />
      </section>
      <section>
        <h2 className="font-bold text-orange-400 text-6xl">Tjänster</h2>
      </section> */}
    </main>
  );
}

function Intro() {
  return (
    <section className='w-screen h-screen flex items-center relative overflow-y-hidden before:content-[""] before:absolute before:bottom-0 before:w-full before:top-0 before:bg-black  before:from-black before:opacity-50'>
      <video
        className="absolute top-0 -z-50 object-cover max-h-none min-w-full h-auto min-h-full"
        src="https://cleefocus.com/wp-content/uploads/2023/09/Cleefocus-film.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative inset-0 flex flex-col justify-end items-center">
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [50, 0],
          }}
          transition={{
            ease: "easeInOut",
            duration: 1.25,
          }}
          className="opacity-0 mx-auto w-full px-[clamp(12px,3vw,24px)] lg:px-[clamp(32px,4vw,40px)] mb-0 flex flex-col gap-10"
        >
          <h2 className="font-bold  text-white leading-[1] text-[clamp(48px,4vw,82px)]">
            Solcellsrengöring och underhåll i Jönköping
          </h2>
          <p className="text-white leading-[1.5] text-[clamp(18px,4vw,24px)]">
            Maximera effektiviteten och utöka livslängden av din
            solcellsanläggning med våra professionella rengöringstjänster
          </p>
          <div className="text-[clamp(18px,4vw,24px)] flex flex-wrap gap-10">
            <button
              type="button"
              className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] hover:bg-blue-400 hover:text-white text-[#696969] rounded-3xl font-light transition duration-200 ease-linear"
            >
              Kontakt
            </button>
            <button
              type="button"
              className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] hover:bg-green-400 hover:text-white text-[#696969] rounded-3xl font-light transition duration-200 ease-linear"
            >
              Ring
            </button>
            <Link
              href="https://www.instagram.com/cleefocus/"
              target="_blank"
              className="text-white flex items-center gap-3"
            >
              <InstagramIcon width={45} height={45} /> Följ oss på Instagram
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section>
      <h2 className="bg-[#141414] text-white w-full py-12 text-center text-[clamp(38px,4vw,64px)] px-4">
        Vi sammarbetar med
      </h2>
      <div className="flex items-center justify-center gap-20 flex-wrap py-12">
        <img
          width={200}
          height={50}
          src="https://cleefocus.com/wp-content/uploads/2023/10/Logo-Smalands-Reklambyra-e1696274659351.png"
          className="pointer-events-none select-none"
        />
        <img
          width={200}
          height={50}
          src="https://cleefocus.com/wp-content/uploads/2023/08/MekMaskin-logo-vit-text.png"
          style={{ filter: "invert(1) grayscale(1)" }}
          className="pointer-events-none select-none"
        />
        <img
          width={200}
          height={50}
          src="https://cleefocus.com/wp-content/uploads/2023/08/kaercher-logo-white-case-study-overlay.webp"
          style={{ filter: "invert(1)" }}
          className="pointer-events-none select-none"
        />
        <img
          width={200}
          height={50}
          src="https://cleefocus.com/wp-content/uploads/2023/08/logo.svg"
          className="pointer-events-none select-none"
        />
      </div>
    </section>
  );
}

function InstagramGallery() {
  const images = [
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/455133922_17899168722024060_8839432986105902310_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/454762286_17898929322024060_9149285269556426652_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/455127181_17898928254024060_80517522873973738_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/455008987_17898758820024060_8513801479627212184_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/453884147_17897889351024060_56629886484733445_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/453730774_17897730876024060_1602622808588332470_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/453406819_17897310750024060_5817124933973139293_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/452634944_17896589940024060_7603900188691136917_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/451866785_17896066923024060_2940186720769365153_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/451338101_17895606690024060_9136278885865093279_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/451450247_17895606390024060_8534976270100613003_nfull.jpg",
    "https://cleefocus.com/wp-content/uploads/sb-instagram-feed-images/450586784_17895179637024060_2053923880400701924_nfull.jpg",
  ];

  return <Carousel images={images} />;
}

const content = [
  {
    title: "Taktvätt",
    description:
      "Vi erbjuder specialiserade taktvätt som är skräddarsydda för dina behov.",
    content: (
      <img
        src="https://cleefocus.com/wp-content/uploads/2023/09/IMG-20230929-WA0016-768x576.jpg"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"
      />
    ),
  },
  {
    title: "Takmålning",
    description:
      "Efter att du har fått ett rent tak kan vi även måla om ditt tak. Vårt team av erfarna tekniker har många år erfarenhet imon branchen och är redo för alla typer av utmaningar.",
    content: (
      <img
        src="https://cleefocus.com/wp-content/uploads/2023/09/IMG-20230929-WA0014-768x576.jpg"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"
      />
    ),
  },
  {
    title: "Marktvätt",
    description:
      "Vi erbjuder specialiserad marktvätt som är skräddarsydd efter dina behov.",
    content: (
      <img
        src="https://cleefocus.com/wp-content/uploads/2023/10/IMG-20231011-WA0001-768x768.jpg"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"
      />
    ),
  },
];
export function Features() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
