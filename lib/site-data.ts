export const brand = {
  name: 'Soto Gubeng Surabaya',
  tagline: 'Taste different',
  whatsappNumber: '6287880007793',
  about:
    'Kami adalah usaha kuliner yang berfokus pada penyajian soto khas Indonesia dengan cita rasa autentik dan kualitas terbaik. Dengan bahan segar dan resep turun-temurun, setiap mangkuk diracik untuk memberi pengalaman makan yang hangat, nyaman, dan berkesan.'
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Tentang', href: '#about' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' }
];

export const featuredMenuId = 'soto-daging';

export const mainMenu = [
  {
    id: 'soto-ayam',
    name: 'Soto Ayam',
    price: 'Rp 18.000',
    description: 'Kuah gurih, ayam suwir lembut, dan aroma rempah yang ringan.',
    note: 'Favorit harian',
    accent: 'from-amber-100 via-orange-100 to-amber-200'
  },
  {
    id: 'soto-daging',
    name: 'Soto Daging',
    price: 'Rp 24.000',
    description: 'Best seller dengan potongan daging empuk dan rasa kuah yang kaya.',
    note: 'Best seller',
    accent: 'from-amber-200 via-yellow-100 to-amber-300'
  },
  {
    id: 'sate-ayam',
    name: 'Sate Ayam',
    price: 'Rp 20.000',
    description: 'Sate ayam dengan bumbu kacang lembut dan pelengkap yang pas.',
    note: 'Cocok sharing',
    accent: 'from-orange-100 via-amber-100 to-yellow-100'
  },
  {
    id: 'soto-buntut',
    name: 'Soto Buntut',
    price: 'Rp 30.000',
    description: 'Kuah kaya rempah dengan buntut empuk untuk rasa yang lebih premium.',
    note: 'New favorite',
    accent: 'from-yellow-100 via-amber-100 to-orange-100'
  }
];

export const addOns = [
  'Nasi / Lontong',
  'Kerupuk',
  'Es Teh Manis',
  'Teh Hangat',
  'Jus Jeruk',
  'Minuman Tradisional & Modern'
];

export const highlights = [
  'Resep autentik & khas Indonesia',
  'Bahan fresh & higienis',
  'Harga terjangkau',
  'Pesan langsung via WhatsApp',
  'Cocok untuk makan harian dan acara'
];

export const testimonials = [
  {
    name: 'Rizal A.',
    message: 'Soto Daging-nya gurih dan porsinya pas. Rasa kuahnya berasa premium banget.',
    rating: 5,
    initials: 'RA'
  },
  {
    name: 'Nadia S.',
    message: 'Tempatnya clean dan tampilannya modern. Bikin lapar dari homepage pertama.',
    rating: 5,
    initials: 'NS'
  },
  {
    name: 'Fajar P.',
    message: 'Order lewat WhatsApp gampang dan responnya cepat. Menu best sellernya mantap.',
    rating: 5,
    initials: 'FP'
  },
  {
    name: 'Sinta W.',
    message: 'Soto ayamnya ringan tapi tetap nendang. Cocok buat makan siang.',
    rating: 5,
    initials: 'SW'
  },
  {
    name: 'Ardi K.',
    message: 'Rasa autentik dan harga masih masuk akal. Worth it buat langganan.',
    rating: 5,
    initials: 'AK'
  },
  {
    name: 'Lina M.',
    message: 'Tampilan menu di web rapi, mudah dipahami, dan bikin yakin buat pesan.',
    rating: 5,
    initials: 'LM'
  },
  {
    name: 'Dimas R.',
    message: 'Sate ayamnya enak, bumbunya pas, dan cocok dijadikan tambahan menu utama.',
    rating: 5,
    initials: 'DR'
  },
  {
    name: 'Maya N.',
    message: 'Saya suka konsep clean minimalnya. Simple tapi tetap berkarakter.',
    rating: 5,
    initials: 'MN'
  },
  {
    name: 'Yusuf H.',
    message: 'Add-on-nya lengkap, jadi gampang bikin pesanan sesuai kebutuhan.',
    rating: 5,
    initials: 'YH'
  },
  {
    name: 'Clara T.',
    message: 'Soto Daging paling juara. Kuahnya hangat, cocok buat suasana Surabaya.',
    rating: 5,
    initials: 'CT'
  }
];

export const contact = {
  whatsappDisplay: '+62 878-8000-7793',
  whatsappLink: 'https://wa.me/6287880007793',
  address: 'Surabaya, Jawa Timur',
  instagram: '@sotogubengsurabaya',
  tiktok: '@sotogubeng',
  mapsEmbed:
    'https://www.google.com/maps?q=Surabaya,+Jawa+Timur&output=embed'
};

export function whatsappMessage(menuName: string) {
  return encodeURIComponent(`Halo, saya ingin pesan ${menuName} dari ${brand.name}.`);
}
