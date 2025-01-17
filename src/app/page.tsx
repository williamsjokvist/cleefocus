"use client";
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Carousel } from "~/components/ui/carousel";
import InstagramIcon from "~icons/mdi/instagram";
import PhoneIcon from "~icons/mdi/phone";
import ArrowRightIcon from "~icons/mdi/lightbulb-on";

import EmailIcon from "~icons/mdi/email";

import { ContactForm } from "~/components/contact";
import { Button } from "~/components/ui/button";
import { useScrollTo } from '~/hooks/scroll-to';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Intro />
      <Features />
      <ContactForm />
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
  "use client"
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 800])
  const scrollTo = useScrollTo({ ease: 'easeInOut', duration: 1.25 });

  return (
    <section className='w-screen min-h-screen pt-[180px] pb-[150px] flex flex-col justify-center relative overflow-y-hidden before:content-[""] before:absolute before:bottom-0 before:w-full before:top-0 before:bg-black  before:from-black before:opacity-50'>
      <motion.video
        style={{ y }}
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
            duration: 1.325,
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
            <Button
              style={{
                padding: '0px'
              }}
              className='bg-gradient-orange group rounded-full hover:shadow-[0px_0px_5px] shadow-none hover:shadow-[#fa744a] transition-shadow'
              onClick={() => scrollTo(document.querySelector('#contact-form'), -200)}
            >
              <span className='text-[#696969] group-hover:text-white group-hover:bg-opacity-0 duration-300 transition-colors px-8 py-2 bg-white rounded-full w-full h-full flex items-center gap-2 bg-opacity-100'>
                Få en offert
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
          <div className="relative top-20 text-white text-left text-lg md:text-2xl">
            <ul className='flex flex-wrap gap-5 justify-around xl:max-w-6xl'>
              <li className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
                <span className='indent-4 inline-block'>Solcellsrengöring</span>
              </li>
              <li className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
                <span className='indent-4 inline-block'>Taktvätt</span>
              </li>
              <li className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
                <span className='indent-4 inline-block'>Takmålning</span>
              </li>
              <li className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
                <span className='indent-4 inline-block'>Fågelskydd</span>
              </li>
              <li className='indent-2 before:bg-gradient-orange before:inline-block before:content-[""] before:w-3 before:h-3 before:rounded-full'>
                <span className='indent-4 inline-block'>Marktvätt</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className='w-full absolute bottom-4 sm:bottom-10 pr-4 sm:pr-10 text-white text-[clamp(18px,4vw,24px)] sm:gap-12 xl:gap-24 flex justify-end flex-wrap gap-6'>
        <div className='flex gap-4 items-center'>
          <PhoneIcon width={45} height={45}
            className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-white'
          />
          <a href='tel:03691190' className='hover:underline'>036-911 90</a>
        </div>
        <div className='flex gap-4 items-center'>
          <EmailIcon width={45} height={45}
            className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-white' />
          <a href='mailto:info@cleefocus.com' className='hover:underline'>info@cleefocus.com</a>
        </div>
        <Link
          href="https://www.instagram.com/cleefocus/"
          target="_blank"
          className="text-white flex items-center gap-3"
        >
          <InstagramIcon width={45} height={45} className='bg-gradient-insta rounded-xl p-[2px]' /> Följ oss på Instagram
        </Link>
      </div>
    </section>
  );
}

const partners = [
  'https://cleefocus.com/wp-content/uploads/2023/10/Logo-Smalands-Reklambyra-e1696274659351.png',
  'https://cleefocus.com/wp-content/uploads/2023/08/MekMaskin-logo-vit-text.png',
  'https://cleefocus.com/wp-content/uploads/2023/08/kaercher-logo-white-case-study-overlay.webp',
  'https://cleefocus.com/wp-content/uploads/2023/08/logo.svg'
]

function Partners() {
  "use client"

  return (
    <section className='px-12'>
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.25, delay: 0.325 }}
        viewport={{ once: true, amount: 0.75 }}
        className="text-black w-full py-6 md:py-12 text-center text-xl sm:text-4xl md:text-[clamp(38px,3vw,58px)] px-4"
      >
        Våra samarbetspartners
      </motion.h2>
      <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap py-12">
        {partners.map((p, i) => (
          <motion.img
            key={p}
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: .75, delay: 0.125 + (i / 3) }}
            viewport={{ once: true, amount: 1 }}
            width={200}
            height={50}
            src={p}
            className="pointer-events-none select-none w-[90px] sm:w-[150px] md:w-[200px] h-full"
            style={{
              ...i === 3 && {
                filter: "invert(1) grayscale(1) contrast(2)"
              },
              ...(i === 2 || i === 1) && {
                filter: "invert(1) grayscale(1)"
              }
            }}
          />
        ))}
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

const features = [
  {
    title: "Solcellsrengöring ",
    description:
      "Rester av damm, sot och pollen kan minska solenergianläggningars och solvärme modulers uteffekt med upp till 20 %. Pris: 1,800 kr upp till 40 paneler",
    img: 'https://cleefocus.com/wp-content/uploads/2023/08/IMG_7546-768x960.jpg'
  },
  {
    title: "Taktvätt",
    description:
      "Vi erbjuder specialiserad taktvätt, skryddarsedd till dina behov",
    img: 'https://cleefocus.com/wp-content/uploads/2023/09/IMG-20230929-WA0016-768x576.jpg'
  },
  {
    title: "Takmålning",
    description:
      `Efter att du har fått ett rent tak kan vi även måla om ditt tak`,
    img: 'https://cleefocus.com/wp-content/uploads/2023/09/IMG-20230929-WA0014-768x576.jpg',
  },
  {
    title: "Fågelpiggar",
    description:
      "Vi skyddar ditt tak mot fåglar",
    img: '/fagelpiggar.jpg'
  },
  {
    title: "Marktvätt",
    description:
      "Vi erbjuder specialiserad marktvätt som är skräddarsydd efter dina behov",
    img: 'https://cleefocus.com/wp-content/uploads/2023/10/IMG-20231011-WA0002-768x1024.jpg',

  },
];
function Features() {
  return (
    <section>
      <h2 className='text-black w-full px-6 py-6 md:py-12 sm:text-center text-xl sm:text-4xl md:text-[clamp(38px,3vw,58px)] focus:outline-black'>Våra tjänster</h2>
      <div className='justify-items-center grid grid-rows-2 grid-cols-2 xl:grid-rows-1 xl:grid-cols-5 px-4 pt-4 md:p-8 lg:px-12 lg:pt-12 gap-4 md:gap-8 xl:gap-12'>
        {features.map(({ title, description, img }, i) => {
          return (
            <motion.div
              key={title}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1.25, delay: 0.125 + (i / 3) }}
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-[350px] w-full  bg-slate-100 rounded-2xl"
            >
              <div className='relative'>
                <img
                  src={img}
                  width={450}
                  height={350}
                  className='object-cover object-center w-full h-[150px] md:w-full md:h-[300px] rounded-t-2xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'
                />
                <h3
                  style={{
                    textShadow: '0px 0px 12px #000'
                  }}
                  className='absolute bottom-0 text-white pl-2 pb-2 text-2xl sm:text-4xl md:text-[clamp(32px,1vw,48px)] font-medium'>
                  {title}
                </h3>
              </div>
              <p className='text-lg md:text-xl break-words p-2'>{description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}
