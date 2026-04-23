"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/aset/logo.png';
import sotoAyamImage from '@/aset/sotogubeng_campur.webp';
import sotoDagingImage from '@/aset/sotogubeng_daging.webp';
import sateAyamImage from '@/aset/sategubeng.webp';
import sotoBuntutImage from '@/aset/sotogubeng_buntut.webp';
import { SiteHeader } from '@/components/site-header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { addOns, brand, contact, featuredMenuId, highlights, mainMenu, testimonials } from '@/lib/site-data';
import { ArrowRight, MapPin, MessageCircle, Minus, Plus, ShoppingCart, Star, Trash2, X } from 'lucide-react';

const heroPhrases = ['Bumbu rempah autentik', 'Cita rasa asli nusantara', 'Resep warisan yang terpercaya'];

const menuImages = {
  'soto-ayam': sotoAyamImage,
  'soto-daging': sotoDagingImage,
  'sate-ayam': sateAyamImage,
  'soto-buntut': sotoBuntutImage
};

type CartItem = {
  id: string;
  name: string;
  price: string;
  qty: number;
};

function currencyToNumber(value: string) {
  return Number.parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
}

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID').format(value);
}

function buildWhatsAppMessage(items: CartItem[]) {
  const lines = items.map((item) => `- ${item.name} x${item.qty} (${item.price})`).join('\n');
  return encodeURIComponent(`Halo, saya ingin pesan pesanan berikut:\n${lines}\n\nMohon dibantu proses pesanan ini ya.`);
}

function MenuCardButton({ onAdd }: { onAdd: () => void }) {
  return (
    <Button type="button" onClick={onAdd} className="w-full">
      <ShoppingCart className="h-4 w-4" />
      Tambahkan ke Keranjang
    </Button>
  );
}

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function CartDrawer({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear
}: {
  cart: CartItem[];
  onClose: () => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + currencyToNumber(item.price) * item.qty, 0);
  const waLink = cart.length ? `${contact.whatsappLink}?text=${buildWhatsAppMessage(cart)}` : contact.whatsappLink;

  return (
    <div className="fixed inset-0 z-[60]">
      <button type="button" aria-label="Tutup keranjang" onClick={onClose} className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border/70 bg-background/95 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <div>
            <p className="text-sm text-muted-foreground">Keranjang</p>
            <h3 className="text-xl font-semibold">{itemCount} item terpilih</h3>
          </div>
          <Button type="button" variant="ghost" size="sm" onClick={onClose} className="px-3">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {cart.length ? (
            cart.map((item) => (
              <div key={item.id} className="rounded-2xl border border-border/70 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Rp {item.price}</p>
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={() => onRemove(item.id)} className="px-2 text-muted-foreground">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Button type="button" variant="outline" size="sm" onClick={() => onDecrease(item.id)} className="h-9 w-9 rounded-full p-0">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <Button type="button" variant="outline" size="sm" onClick={() => onIncrease(item.id)} className="h-9 w-9 rounded-full p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm font-semibold text-foreground">Rp {formatRupiah(currencyToNumber(item.price) * item.qty)}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-border/70 bg-white/5 p-8 text-center">
              <ShoppingCart className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-4 text-lg font-semibold">Keranjang masih kosong</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Tambahkan menu dulu dari section menu, lalu kirim pesanan lewat WhatsApp.</p>
            </div>
          )}
        </div>

        <div className="border-t border-border/60 px-5 py-5">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Total</span>
            <span className="font-semibold text-foreground">Rp {formatRupiah(total)}</span>
          </div>

          <div className="mt-4 flex gap-3">
            <Button type="button" variant="outline" className="flex-1" onClick={onClear} disabled={!cart.length}>
              Kosongkan
            </Button>
            {cart.length ? (
              <Button asChild className="flex-1">
                <Link href={waLink} target="_blank" rel="noreferrer">
                  Pesan Sekarang
                </Link>
              </Button>
            ) : (
              <Button type="button" className="flex-1" disabled>
                Pesan Sekarang
              </Button>
            )}
          </div>

          <p className="mt-3 text-xs leading-5 text-muted-foreground">Tombol pesan akan meneruskan isi keranjang ke WhatsApp sesuai pesanan yang dipilih.</p>
        </div>
      </aside>
    </div>
  );
}

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [heroText, setHeroText] = useState(heroPhrases[0]);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      const word = heroPhrases[wordIndex];

      if (!deleting) {
        charIndex += 1;
        setHeroText(word.slice(0, charIndex));

        if (charIndex >= word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1200);
          return;
        }

        timeoutId = setTimeout(tick, 75);
        return;
      }

      charIndex -= 1;
      setHeroText(word.slice(0, charIndex));

      if (charIndex <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % heroPhrases.length;
        timeoutId = setTimeout(tick, 250);
        return;
      }

      timeoutId = setTimeout(tick, 45);
    };

    tick();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  const addToCart = (menuId: string) => {
    const item = mainMenu.find((entry) => entry.id === menuId);
    if (!item) return;

    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) => (entry.id === item.id ? { ...entry, qty: entry.qty + 1 } : entry));
      }

      return [...current, { id: item.id, name: item.name, price: item.price, qty: 1 }];
    });
    setCartOpen(true);
  };

  const increaseItem = (id: string) => {
    setCart((current) => current.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  };

  const decreaseItem = (id: string) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <main className="min-h-screen">
      <SiteHeader cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      <section id="home" className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge className="mb-5 w-fit">Taste different</Badge>
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="typing-text typing-caret text-primary">{heroText}</span>
            <span className="mt-3 block">Soto Gubeng Surabaya</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{brand.about}</p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="#menu">
                Lihat Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#about">Tentang Kami</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.slice(0, 4).map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-white/5 p-4 text-sm text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.08] hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge className="mb-3">Menu utama + add-on</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Menu andalan yang fokus jualan</h2>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="#contact">Kontak</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {mainMenu.map((item) => {
            const featured = item.id === featuredMenuId;
            const image = menuImages[item.id as keyof typeof menuImages];

            return (
              <Card key={item.id} className={featured ? 'border-primary/50 bg-black/20 shadow-[0_18px_40px_rgba(255,109,31,0.18)]' : 'bg-black/20'}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-gradient-to-br from-white/5 to-transparent">
                  <Image src={image} alt={item.name} fill className="object-cover transition-transform duration-700 ease-out hover:scale-105" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription className="mt-1">{item.description}</CardDescription>
                    </div>
                    <Badge>{item.note}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-foreground">{item.price}</p>
                    {featured ? <Badge>Best seller</Badge> : null}
                  </div>
                  <div className="mt-4">
                    <MenuCardButton onAdd={() => addToCart(item.id)} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 border-border/70 bg-black/20">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Badge className="mb-3">Add-on</Badge>
                <h3 className="text-2xl font-semibold tracking-tight">Pelengkap untuk pesanan yang lebih fleksibel</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Add-on dibikin satu tone dengan card menu utama supaya tampilan lebih rapi dan konsisten.</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {addOns.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-border/70 bg-white/5 px-4 py-2 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.08]"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge className="mb-3">About</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tentang, visi, dan misi</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{brand.about}</p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-border/60 pt-10 lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About</p>
            <h3 className="mt-3 text-xl font-semibold">Cerita brand</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Soto Gubeng Surabaya dibangun untuk menghadirkan rasa tradisional yang tetap terasa modern, rapi, dan mudah dipesan.</p>
          </div>

          <div className="lg:border-l lg:border-border/60 lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Visi</p>
            <h3 className="mt-3 text-xl font-semibold">Menjadi brand soto terpercaya</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Dikenal luas karena kualitas rasa, pelayanan, dan penyajian yang terasa premium tanpa kehilangan identitas lokal.</p>
          </div>

          <div className="lg:border-l lg:border-border/60 lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Misi</p>
            <h3 className="mt-3 text-xl font-semibold">Rasa, layanan, dan inovasi</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
              <li>Menyajikan soto dengan bahan berkualitas tinggi</li>
              <li>Memberikan pelayanan terbaik kepada pelanggan</li>
              <li>Mengembangkan inovasi menu tanpa menghilangkan cita rasa asli</li>
              <li>Memanfaatkan teknologi digital untuk pemesanan yang lebih mudah</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge className="mb-3">Testimoni</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dipilih untuk ditutup dengan social proof</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="group bg-black/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="transition-transform duration-300 group-hover:scale-105">
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <StarRow rating={item.rating} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-7">{item.message}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="bg-black/20">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 sm:p-8">
              <Badge className="mb-3">Kontak</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Pesan langsung ke orangnya lewat WhatsApp</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Tidak pakai bot. Pesanan akan masuk ke nomor aktif agar komunikasi tetap cepat dan personal.</p>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" /> {contact.whatsappDisplay}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {contact.address}
                </p>
                <p>Instagram: {contact.instagram}</p>
                <p>TikTok: {contact.tiktok}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={`${contact.whatsappLink}?text=${encodeURIComponent(`Halo, saya ingin pesan dari ${brand.name}.`)}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Pesan via WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#menu">Lihat Menu Lagi</Link>
                </Button>
              </div>
            </div>

            <div className="min-h-[360px] overflow-hidden border-t border-border/70 lg:border-l lg:border-t-0">
              <iframe title="Maps" src={contact.mapsEmbed} className="h-full min-h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t border-border/60 bg-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Image src={logo} alt={brand.name} className="h-10 w-10 rounded-2xl object-cover" />
            <div>
              <p className="font-semibold text-foreground">{brand.name}</p>
              <p className="text-sm text-muted-foreground">Black, gold, and warm minimal branding</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 {brand.name}. All rights reserved.</p>
        </div>
      </footer>

      {cartOpen ? <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onIncrease={increaseItem} onDecrease={decreaseItem} onRemove={removeItem} onClear={clearCart} /> : null}
    </main>
  );
}
