"use client"
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useScrollTo } from "~/hooks/scroll-to";
import HamburgerIcon from "~icons/mdi/hamburger-menu";
import CloseIcon from "~icons/mdi/close";
import { Button } from "./ui/button";

const scrollThreshold = 250

export function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo({ ease: 'easeInOut', duration: 1.25 });
  const [pageScroll, setPageScroll] = React.useState(0)
  useMotionValueEvent(scrollY, "change", (value) => setPageScroll(value))

  const navRef = React.useRef<HTMLElement>(null)
  const scrolled = pageScroll > scrollThreshold

  const homeRef = React.useRef<HTMLAnchorElement>(null)
  const aboutRef = React.useRef<HTMLAnchorElement>(null)
  const albumRef = React.useRef<HTMLAnchorElement>(null)

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!navRef.current) return
    if (albumRef.current && pathname === '/album') {
      navRef.current.style.setProperty(
        "--underline-offset-x",
        `${albumRef.current.offsetLeft}px`
      );
      navRef.current.style.setProperty(
        "--underline-width",
        `${albumRef.current.offsetWidth}px`
      );
    } else if (homeRef.current && pathname === '/') {
      navRef.current.style.setProperty(
        "--underline-offset-x",
        `${homeRef.current.offsetLeft}px`
      );
      navRef.current.style.setProperty(
        "--underline-width",
        `${homeRef.current.offsetWidth}px`
      );
    } else if (aboutRef.current && pathname === '/about') {
      navRef.current.style.setProperty(
        "--underline-offset-x",
        `${aboutRef.current.offsetLeft}px`
      );
      navRef.current.style.setProperty(
        "--underline-width",
        `${aboutRef.current.offsetWidth}px`
      );
    } else {
      navRef.current.style.setProperty(
        "--underline-width",
        `0px`
      );
    }
  }, [navRef, albumRef, pathname])

  return (
    <motion.div
      className={`transition-[padding,background-color,shadow,color] text-black
        text-xl duration-1000 fixed top-0 z-50 w-full
        md:flex items-center md:justify-between
        ${open ? '' : 'flex'}
        lg:px-[30px] px-4
        md:h-auto ${open ? 'h-screen' : 'h-[90px]'}
        ${scrolled || open ? 'py-6' : 'py-6'}
        ${scrolled || open ? 'text-black' : 'text-white'}
        ${scrolled || open ? 'bg-white' : 'bg-transparent'}
        ${scrolled || open ? 'shadow-md' : 'shadow-none'}
      `}
      style={{
        borderColor: scrolled || open ? 'black' : 'transparent',
      }}
    >
      <div className='absolute left-0 w-screen flex justify-center -z-10 md:relative md:left-auto md:w-auto md:block'>
        <Link href="/">
          <img
            src="/logo.png"
            alt="Cleefocus logo"
            className="z-10 max-w-[200px] h-[42px]"
            style={{
              filter: scrolled || open ? 'grayscale(1) brightness(0)' : 'grayscale(1) brightness(8)'
            }}
            onClick={(e) => {
              setOpen(false)
              scrollTo()
              if (pathname === '/') {
                e.preventDefault()
              }
            }}
          />
        </Link>
      </div>
      <button type="button" className='md:hidden block' onClick={() => setOpen(!open)}>
        {open ? <CloseIcon width={45} height={45} />
          : <HamburgerIcon width={45} height={45} />}
      </button>
      <div className='justify-center md:justify-normal items-center gap-12 flex'>
        <nav
          ref={navRef}
          className={`
            md:flex md:flex-row ${open ? 'flex flex-col' : 'hidden'}
            text-3xl md:text-xl
            pt-24 md:pt-0
            h-full md:h-auto
            gap-32 md:gap-6 lg:gap-12
            relative
            items-center font-medium
            after:content-['']
            md:after:block
            after:hidden
            after:absolute
            after:top-full
            after:h-1
            after:w-[var(--underline-width)]
            after:translate-x-[var(--underline-offset-x)]
            after:transition-[transform,width]
            after:duration-700
            after:rounded-full
            ${!scrolled
              ? 'after:bg-gradient-to-br after:to-[#fa744a] after:from-[#ffc63f] after:shadow-[0px_0px_5px] after:shadow-[#fa744a]'
              : 'after:bg-black'
            }
          `}
          onMouseLeave={(e) => {
            if (navRef.current) {
              if (albumRef.current && pathname === '/album') {
                navRef.current.style.setProperty(
                  "--underline-offset-x",
                  `${albumRef.current.offsetLeft}px`
                );
                navRef.current.style.setProperty(
                  "--underline-width",
                  `${albumRef.current.offsetWidth}px`
                );
              } else if (aboutRef.current && pathname === '/about') {
                navRef.current.style.setProperty(
                  "--underline-offset-x",
                  `${aboutRef.current.offsetLeft}px`
                );
                navRef.current.style.setProperty(
                  "--underline-width",
                  `${aboutRef.current.offsetWidth}px`
                );
              } else if (homeRef.current && pathname === '/') {
                navRef.current.style.setProperty(
                  "--underline-offset-x",
                  `${homeRef.current.offsetLeft}px`
                );
                navRef.current.style.setProperty(
                  "--underline-width",
                  `${homeRef.current.offsetWidth}px`
                );
              } else {
                navRef.current.style.setProperty(
                  "--underline-width",
                  `0px`
                );
              }
            }
          }}
          onMouseOver={(e) => {
            if (navRef.current && (e.target as HTMLElement).classList.contains('nav-item')) {
              navRef.current.style.setProperty(
                "--underline-offset-x",
                `${(e.target as HTMLElement).offsetLeft}px`
              );
              navRef.current.style.setProperty(
                "--underline-width",
                `${(e.target as HTMLElement).offsetWidth}px`
              );
            }
          }}
        >
          <Link ref={homeRef} href="/" className='nav-item' onClick={(e) => {
            setOpen(false)
            scrollTo()
            if (pathname === '/') {
              e.preventDefault()
            }
          }}>Hem</Link>
          <Link
            ref={aboutRef}
            href="/about"
            className='nav-item'
            style={{
              ...pathname === '/about' && {
                fontWeight: 'extrabold',
              }
            }}
            onClick={(e) => {
              setOpen(false)
              scrollTo()
              if (pathname === '/about') {
                e.preventDefault()
              }
            }}>Om oss</Link>
          <Link ref={albumRef} className='nav-item' href="/album"
            style={{
              ...pathname === '/album' && {
                fontWeight: 'extrabold',
              }
            }}
            onClick={(e) => {
              setOpen(false)
              scrollTo()
              if (pathname === '/album') {
                e.preventDefault()
              }
            }}
          >
            Galleri
          </Link>
        </nav>
        <Link
          href='/'
          style={{
            padding: '0px'
          }}
          className='hidden md:block bg-gradient-orange group rounded-full hover:shadow-[0px_0px_5px] shadow-none hover:shadow-[#fa744a] transition-shadow'
          onClick={(e) => {
            setOpen(false)
            if (pathname !== '/') {
              setTimeout(() => scrollTo(document.querySelector('#contact-form'), -200), 500)
              return
            } else {
              e.preventDefault()
            }
            scrollTo(document.querySelector('#contact-form'), -200)
          }}
        >
          <span className={`
            text-[#696969] group-hover:text-white group-hover:bg-opacity-0 transition-colors px-8 py-2
             rounded-full w-full h-full block bg-opacity-100 duration-300
            ${scrolled || open ? 'bg-black text-white' : 'bg-white'}
            `}>
            Få en offert
          </span>
        </Link>
      </div>
    </motion.div >
  );
}
