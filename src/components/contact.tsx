"use client"
import React from 'react'
import { Button } from "./ui/button";
import { motion } from 'framer-motion'

export function ContactForm() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <form
      method="POST"
      className="bg-white pb-12 px-12"
      id='contact-form'
    >
      <motion.header
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.25, delay: 0.325 }}
        viewport={{ once: true, amount: 0.325 }}
      >
        <h2

          className="text-black w-full py-12 sm:text-center text-[clamp(38px,4vw,64px)] focus:outline-black">
          Kontaktformulär
        </h2>
        <p className='md:max-w-[720px] mx-auto text-xl sm:text-center pb-12'>
          Kontakta oss gärna för en kostnadsfri offert,
          eller för att höra mer om hur vi kan hjälpa dig med din fastighet
        </p>
      </motion.header>

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.25, delay: 0.525 }}
        viewport={{ once: true, amount: 0.5 }}
        className="md:max-w-[720px] text-2xl flex flex-col gap-4 justify-items-center items-center mx-auto"
      >
        <input type="text" className="w-full bg-[#f9f9f9] px-4 py-4 border-b-[1px] border-black focus:bg-transparent transition-colors" placeholder="För- och efternamn" />
        <div className='flex flex-col gap-[inherit] md:flex-row justify-between w-full'>
          <input type="email" className="w-full bg-[#f9f9f9] px-4 py-4 border-b-[1px] border-black focus:bg-transparent transition-colors" placeholder="Epostaddress" />
          <input
            type="tel"
            pattern="[+]{1}[0-9]{11,14}"
            placeholder="Telefon"
            className="w-full bg-[#f9f9f9] px-4 py-4 border-b-[1px] border-black focus:bg-transparent transition-colors"
            onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9\+]/g, ""))}
            value={phoneNumber}
            maxLength={15}
          />
        </div>
        <div className='flex flex-col gap-[inherit] md:flex-row justify-between w-full'>
          <input type="text" className="bg-[#f9f9f9] w-full px-4 py-4 border-b-[1px] border-black focus:bg-transparent transition-colors" placeholder="Address" />
          <input type="text" className="bg-[#f9f9f9] md:max-w-[250px] w-full px-4 py-4 border-b-[1px] border-black focus:bg-transparent transition-colors" placeholder="Postnummer" />
        </div>
        <textarea
          className="overflow-y-hidden h-auto bg-[#f9f9f9] p-4 w-full min-h-[140px] border-b-[1px] border-black focus:bg-transparent resize-none transition-colors"
          placeholder="Meddelande"
          onInput={(e) => {
            const el = e.target as HTMLTextAreaElement
            el.style.height = `auto`;
            el.style.height = `${el.scrollHeight}px`;
          }}
        />

        <Button className="mt-8 block mx-auto bg-sgray text-white text-2xl">Skicka</Button>
      </motion.div>
    </form>
  );
}
