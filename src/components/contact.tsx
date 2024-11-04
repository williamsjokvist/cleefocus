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
        <p className='text-xl sm:text-center pb-12'>
          Kontakta oss gärna för en kostnadsfri offert,
          eller för att höra mer om hur vi kan hjälpa dig med din fastighet
        </p>
      </motion.header>

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.25, delay: 0.525 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-2xl px-4 flex flex-col gap-4 justify-items-center items-center py-8 mx-auto">
        <div className="flex flex-wrap gap-7 justify-center">
          <input type="text" className="px-4 max-w-[320px] py-4 border-b-[1px] border-black bg-transparent" placeholder="För- och efternamn" />
          <input
            type="tel"
            pattern="[+]{1}[0-9]{11,14}"
            placeholder="Telefon"
            className="px-4 max-w-[320px] py-4 border-b-[1px] border-black bg-transparent"
            onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9\+]/g, ""))}
            value={phoneNumber}
            maxLength={15}
          />
          <input type="email" className="px-4 max-w-[320px] py-4 border-b-[1px] border-black bg-transparent" placeholder="Epostaddress" />
        </div>
        <textarea
          className="p-4 max-w-[720px] w-full h-[140px] border-b-[1px] border-black bg-transparent resize-none"
          placeholder="Meddelande"
        />

        <Button className="mt-8 block mx-auto bg-sgray text-white text-2xl">Skicka</Button>
      </motion.div>
    </form>
  );
}
