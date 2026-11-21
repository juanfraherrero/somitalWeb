'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WhatsAppLink from './WhatsAppLink';
import { WhatsAppIcon } from './icons';
import { communityLink } from '@/lib/whatsapp';

const links = [
  { href: '/trekking-mar-del-plata', label: 'Trekking' },
  { href: '/actividades', label: 'Actividades' },
  { href: '/actividades/colegios', label: 'Colegios' },
  { href: '/comunidad', label: 'Comunidad' },
  { href: '#contacto', label: 'Contacto' },
];

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // La home arranca con el hero de fondo: la barra es transparente hasta scrollear
  const isTransparent = currentPath === '/' && !isScrolled && !isMenuOpen;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [currentPath]);

  const linkClass = (href) => {
    const isActive = href !== '#contacto' && currentPath.startsWith(href) &&
      !(href === '/actividades' && currentPath.startsWith('/actividades/colegios'));
    return `rounded-full px-3 py-2 text-sm lg:text-base font-bold transition ${isActive
      ? (isTransparent ? 'bg-white/15' : 'bg-secondary/10 text-secondary')
      : (isTransparent ? 'hover:bg-white/10' : 'hover:bg-secondary/5')}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isTransparent
        ? 'bg-transparent text-white'
        : 'bg-background/95 text-secondary shadow-sm backdrop-blur'}`}
    >
      <nav className="container-site flex h-16 md:h-20 items-center justify-between" aria-label="Principal">
        <Link href="/" className="flex items-center gap-3" aria-label="Somital Aventuras - Inicio">
          <Image src="/logo.svg" alt="Logo Somital" width={40} height={40} priority />
          <span className="font-display text-xl font-bold tracking-tight">Somital</span>
        </Link>

        {/* LIST MENU FOR LAPTOP */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
          <WhatsAppLink href={communityLink()} event="community_click" label="navbar" className="btn-whatsapp ml-3 !px-5 !py-2 text-sm">
            <WhatsAppIcon className="h-4 w-4" />
            Sumate a la comunidad
          </WhatsAppLink>
        </div>

        {/* BURGER BUTTON */}
        <button
          className="lg:hidden rounded-full p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            {isMenuOpen
              ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* LIST MENU FOR MOBILE */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-secondary/10 bg-background">
          <div className="container-site flex flex-col py-4">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setIsMenuOpen(false)}
                className="py-3 font-display text-xl font-bold text-secondary">
                {label}
              </Link>
            ))}
            <WhatsAppLink href={communityLink()} event="community_click" label="navbar_mobile" className="btn-whatsapp mt-4">
              <WhatsAppIcon />
              Sumate a la comunidad
            </WhatsAppLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
