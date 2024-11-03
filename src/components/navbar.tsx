"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useScrollTo } from "~/hooks/scroll-to";

const scrollThreshold = 250

export function NavBar() {
  const pathname = usePathname()
  const { scrollY } = useScroll();
  const scrollTo = useScrollTo({ ease: 'easeInOut', duration: 1.25 });
  const [pageScroll, setPageScroll] = React.useState(0)
  useMotionValueEvent(scrollY, "change", (value) => setPageScroll(value))

  const navRef = React.useRef<HTMLElement>(null)
  const scrolled = pageScroll > scrollThreshold

  const homeRef = React.useRef<HTMLAnchorElement>(null)
  const albumRef = React.useRef<HTMLAnchorElement>(null)

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
    } else {
      navRef.current.style.setProperty(
        "--underline-width",
        `0px`
      );
    }
  }, [navRef, albumRef])

  return (
    <motion.div
      className="transition-[padding,background-color] text-black text-xl duration-1000 bg-white fixed top-0 z-50 w-full flex items-center justify-between"
      style={{
        backgroundColor: scrolled ? 'white' : 'transparent',
        color: scrolled ? 'black' : 'white',
        padding: scrolled ? '12px 60px' : '25px 60px',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'black' : 'transparent'
      }}
    >
      <dl className="flex gap-8">
        <div>
          <dt className='font-bold'>Telefon</dt>
          <dd>
            036-911 90
          </dd>
        </div>
        <div>
          <dt className='font-bold'>Epost</dt>
          <dd>
            info@cleefocus.com
          </dd>
        </div>
      </dl>
      <div className='absolute left-0 w-screen flex justify-center -z-10'>
        <Link href="/">
          <img
            src="/logo.png"
            alt="Cleefocus logo"
            className="z-10 max-w-[200px] h-[42px]"
            style={{
              filter: scrolled ? 'grayscale(1) brightness(0)' : 'grayscale(1) brightness(8)'
            }}
            onClick={(e) => {
              if (pathname === '/') {
                scrollTo()
                e.preventDefault()
              }
            }}
          />
        </Link>
      </div>

      <nav
        ref={navRef}
        className={`relative
          flex gap-12 items-center font-medium
          after:content-['']
          after:block
          after:absolute
          after:top-full
          after:h-1
          after:w-[var(--underline-width)]
          after:translate-x-[var(--underline-offset-x)]
          after:transition-[transform,width]
          after:duration-700
          after:rounded-full
          ${scrolled ? 'after:bg-black' : 'after:bg-orange-400'}
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
          if (pathname === '/') {
            scrollTo()
            e.preventDefault()
          }
        }}>Hem</Link>
        <Link
          href="/about"
          className='nav-item'

          onClick={(e) => {
            if (pathname === '/about') {
              scrollTo()
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
            if (pathname === '/album') {
              scrollTo()
              e.preventDefault()
            }
          }}
        >
          Galleri
        </Link>
      </nav>
    </motion.div >
  );
}
