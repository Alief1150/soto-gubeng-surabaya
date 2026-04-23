"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/aset/logo.png';
import { navItems, brand } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

type SiteHeaderProps = {
  cartCount: number;
  onCartClick: () => void;
};

export function SiteHeader({ cartCount, onCartClick }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image src={logo} alt={brand.name} className="h-11 w-11 rounded-2xl object-cover shadow-sm" priority />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none text-foreground">{brand.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{brand.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onCartClick}
            className="relative overflow-visible px-4"
            aria-label={`Keranjang belanja, ${cartCount} item`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground shadow-lg">
                {cartCount}
              </span>
            ) : null}
          </Button>

          <Button asChild className="hidden sm:inline-flex">
            <Link href="#menu">Pesan Sekarang</Link>
          </Button>

          <Button asChild size="sm" className="sm:hidden">
            <Link href="#menu">Pesan</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
