export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type Product = {
  id: string
  name: string
  category: string
  color: string
  price: number
  badge?: string
  badgeTone?: 'light' | 'sky'
  image: string
  imageAlt: string
  imagePosition?: string
  description: string
  details: string[]
  sizes: string[]
}

export type Look = {
  image: string
  imageAlt: string
  title: string
  caption: string
}

export type Testimonial = {
  quote: string
  name: string
  city: string
}

export type FooterColumn = {
  title: string
  links?: NavLink[]
  lines?: string[]
}

export type Value = {
  title: string
  description: string
}

export type Brand = {
  name: string
  meaning: string
  tagline: string
  description: string
  founded: string
  city: string
  locale: string
  currency: string
  announcement: string
  announcementShort: string
  contact: {
    email: string
    whatsapp: string
    whatsappDisplay: string
    instagram: string
    instagramUrl: string
    whatsappMessage: string
  }
  theme: {
    colors: Record<string, string>
    fonts: { display: string; body: string }
  }
  nav: NavLink[]
  header: { ctaLabel: string; ctaHref: string }
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    description: string
    primaryCta: NavLink
    secondaryCta: NavLink
    image: string
    imageAlt: string
    imageBadge: string
    imageBadgeSub: string
    imageCaption: string
    notes: string[]
  }
  marquee: string[]
  productsSection: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    meta: string
  }
  products: Product[]
  quickView: {
    quickLabel: string
    sizeLabel: string
    detailsLabel: string
    orderLabel: string
    note: string
    closeLabel: string
  }
  blueEdit: {
    eyebrow: string
    title: string
    titleAccent: string
    description: string
    points: string[]
    primaryCta: NavLink
    secondaryCta: NavLink
    image: string
    imageAlt: string
    captionLeft: string
    captionRight: string
  }
  story: {
    eyebrow: string
    title: string
    titleAccent: string
    paragraphs: string[]
    quote: string
    signature: string
    role: string
    image: string
    imageAlt: string
    imageCaption: string
    insetImage: string
    insetImageAlt: string
  }
  values: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    items: Value[]
  }
  lookbook: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    cta: NavLink
    items: Look[]
  }
  testimonials: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    items: Testimonial[]
  }
  instagram: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    cta: NavLink
    images: { image: string; imageAlt: string }[]
  }
  newsletter: {
    eyebrow: string
    title: string
    titleAccent: string
    description: string
    placeholder: string
    buttonLabel: string
    note: string
    error: string
    successTitle: string
    successText: string
  }
  footer: {
    blurb: string
    contactTitle: string
    columns: FooterColumn[]
    rights: string
    creditPrefix: string
    creditLabel: string
    creditHref: string
    backToTop: string
  }
  seo: { title: string; description: string; themeColor: string }
}

export const brand: Brand = {
  name: 'Ji&Co',
  meaning: 'Joveline & Indhika',
  tagline: 'Everyday elegance, made to fit.',
  description:
    'Ji&Co menghadirkan fashion kekinian yang simple, sederhana, namun tetap trendi—dirancang nyaman dan pas untuk banyak bentuk tubuh.',
  founded: '2026',
  city: 'Jakarta, Indonesia',
  locale: 'id-ID',
  currency: 'IDR',
  announcement: 'Gratis ongkir untuk pesanan di atas Rp 500.000',
  announcementShort: 'Gratis ongkir min. Rp 500.000',
  contact: {
    email: 'hello@jiandco.com',
    whatsapp: '6281234567890',
    whatsappDisplay: '+62 812 3456 7890',
    instagram: '@jiandco',
    instagramUrl: 'https://www.instagram.com/jiandco',
    whatsappMessage: 'Halo Ji&Co, saya ingin bertanya tentang koleksi terbaru.',
  },
  theme: {
    colors: {
      ink: '#111214',
      cream: '#F7F5F1',
      white: '#FFFFFF',
      sky: '#A9C8FF',
      'sky-soft': '#EDF3FF',
      blue: '#2D5CA8',
      'blue-deep': '#1C3D73',
      line: '#E5E1D9',
      muted: '#6B6B70',
    },
    fonts: {
      display: "'Cormorant Garamond Variable', Georgia, serif",
      body: "'Manrope Variable', ui-sans-serif, system-ui, sans-serif",
    },
  },
  nav: [
    { label: 'New In', href: '#new-in' },
    { label: 'The Blue Edit', href: '#blue-edit' },
    { label: 'Our Story', href: '#story' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Contact', href: '#contact' },
  ],
  header: {
    ctaLabel: 'Shop Now',
    ctaHref: '#new-in',
  },
  hero: {
    eyebrow: 'New Collection — 01',
    title: 'Everyday elegance,',
    titleAccent: 'made to fit.',
    description:
      'Ji&Co hadir untuk perempuan yang percaya bahwa gaya terbaik tidak perlu berteriak. Potongan bersih, bahan yang nyaman, dan detail yang membuat kamu merasa paling diri sendiri.',
    primaryCta: { label: 'Jelajahi Koleksi', href: '#new-in' },
    secondaryCta: { label: 'Kenali Ji&Co', href: '#story' },
    image: '/images/blue-edit-main.webp',
    imageAlt:
      'Perempuan mengenakan kemeja linen biru muda dan celana denim dengan pose santai',
    imageBadge: 'New In',
    imageBadgeSub: 'The Blue Edit',
    imageCaption: 'Collection 01 — Jakarta, 2026',
    notes: [
      'Gratis ongkir di atas Rp 500.000',
      'Pengembalian mudah 7 hari',
      'Dibuat di Indonesia',
    ],
  },
  marquee: [
    'Simple silhouettes',
    'Everyday comfort',
    'Made to fit',
    'Considered details',
  ],
  productsSection: {
    eyebrow: 'Koleksi 01',
    title: "Pieces you'll",
    titleAccent: 'live in.',
    intro:
      'Essentials yang dirancang untuk dipakai berulang kali—bukan sekadar tren musim ini. Kenali potongannya, rasakan bahannya, lalu jadikan milikmu.',
    meta: '4 pieces — Capsule 01',
  },
  products: [
    {
      id: 'linen-shirt',
      name: 'The Linen Shirt',
      category: 'Atasan',
      color: 'Natural',
      price: 329000,
      badge: 'New',
      badgeTone: 'light',
      image: '/images/product-linen.webp',
      imageAlt:
        'Kemeja linen berwarna natural digantung pada rail minimalis',
      imagePosition: '50% 52%',
      description:
        'Kemeja linen dengan potongan relaxed yang ringan dan jatuh sempurna. Dibuat untuk dipakai dari rapat pagi sampai makan malam.',
      details: [
        '100% linen dengan tekstur lembut',
        'Relaxed fit dengan kerah klasik',
        'Tersedia XS–XL',
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 'soft-knit',
      name: 'The Soft Knit',
      category: 'Rajut',
      color: 'Oat',
      price: 289000,
      badge: 'Bestseller',
      badgeTone: 'sky',
      image: '/images/product-knit.webp',
      imageAlt:
        'Perempuan mengenakan pullover rajut berwarna oat dengan latar hangat',
      imagePosition: '50% 68%',
      description:
        'Pullover rajut bertekstur yang hangat tanpa terasa berat. Warna oat yang tenang, mudah dipadukan dengan apa pun di lemari kamu.',
      details: [
        'Campuran katun dan wool',
        'Regular fit dengan rib detail',
        'Tersedia XS–XL',
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 'blue-shirt',
      name: 'The Blue Shirt',
      category: 'Atasan',
      color: 'Cobalt',
      price: 349000,
      badge: 'The Blue Edit',
      badgeTone: 'sky',
      image: '/images/product-blue.webp',
      imageAlt:
        'Kemeja biru dengan kerah Shanghai dipajang pada manekin',
      imagePosition: '50% 64%',
      description:
        'Kemeja kerah Shanghai dalam biru dalam yang tegas. Potongan bersih untuk tampilan rapi yang tetap terasa ringan sepanjang hari.',
      details: [
        'Katun poplin yang breathable',
        'Kerah Shanghai dan kancing tersembunyi',
        'Tersedia XS–XL',
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
      id: 'satin-set',
      name: 'The Satin Set',
      category: 'Set',
      color: 'Ivory',
      price: 459000,
      badge: 'Limited',
      badgeTone: 'light',
      image: '/images/product-satin.webp',
      imageAlt: 'Set atasan dan rok satin putih dengan kilau lembut',
      imagePosition: '50% 38%',
      description:
        'Set atasan dan rok satin dengan kilau lembut. Satu set yang cukup untuk membuat malam biasa terasa istimewa.',
      details: [
        'Satin dengan lining lembut',
        'Atasan relaxed dan rok midi',
        'Tersedia XS–XL',
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
  ],
  quickView: {
    quickLabel: 'Quick view',
    sizeLabel: 'Pilih ukuran',
    detailsLabel: 'Detail',
    orderLabel: 'Pesan via WhatsApp',
    note: 'Kami akan mengonfirmasi ketersediaan, ukuran, dan ongkir melalui WhatsApp.',
    closeLabel: 'Tutup detail produk',
  },
  blueEdit: {
    eyebrow: 'The Blue Edit — Limited Capsule',
    title: 'Blue, the new',
    titleAccent: 'neutral.',
    description:
      'Biru langit yang tenang, dihadirkan dalam potongan yang mudah dipadukan. Kapsul kecil untuk hari-hari yang ingin terasa sedikit lebih ringan.',
    points: [
      'Terbatas 10 pieces',
      'Sky-blue signature shade',
      'Tersedia XS–XL',
    ],
    primaryCta: { label: 'Jelajahi The Blue Edit', href: '#new-in' },
    secondaryCta: { label: 'Lihat Lookbook', href: '#lookbook' },
    image: '/images/hero-main.webp',
    imageAlt:
      'Perempuan mengenakan atasan putih dan celana biru muda di ruang studio bernuansa biru langit',
    captionLeft: 'The Blue Edit — 01',
    captionRight: '10 pieces only',
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Lahir dari pertemanan,',
    titleAccent: 'tumbuh dari gaya.',
    paragraphs: [
      'Ji&Co berawal dari Joveline dan Indhika—dua sahabat yang memiliki minat yang sama besar pada fashion. Nama Ji&Co adalah cara mereka menyatukan dua nama, dua selera, dan satu visi.',
      'Kami ingin menghadirkan fashion kekinian yang menjangkau banyak kalangan perempuan: model yang simple, sederhana, namun tetap trendi. Potongan dirancang dengan hati-hati agar nyaman dan pas di berbagai bentuk tubuh, untuk menemani hari-hari nyata—bukan hanya satu momen istimewa.',
    ],
    quote:
      'Elegan bukan tentang menjadi pusat perhatian. Elegan adalah saat kamu merasa nyaman menjadi diri sendiri.',
    signature: 'Joveline & Indhika',
    role: 'Founders of Ji&Co',
    image: '/images/story-atelier.webp',
    imageAlt:
      'Perempuan desainer bekerja di atelier terang dengan manekin dan sketsa busana',
    imageCaption: 'Di balik layar — atelier Ji&Co, Jakarta',
    insetImage: '/images/story-workspace.webp',
    insetImageAlt:
      'Meja kerja desainer dengan mesin jahit, sketsa, dan contoh kain biru',
  },
  values: {
    eyebrow: 'The Ji&Co Way',
    title: 'Sedikit, tapi',
    titleAccent: 'berarti.',
    intro:
      'Tiga prinsip sederhana yang kami pegang di setiap koleksi—dari memilih kain sampai detail terakhir.',
    items: [
      {
        title: 'Fit yang memeluk',
        description:
          'Siluet dirancang untuk bergerak bersama tubuh, bukan melawannya. Nyaman dari pagi hingga malam, di berbagai bentuk tubuh.',
      },
      {
        title: 'Bahan yang bernapas',
        description:
          'Linen, katun, dan viscose pilihan yang lembut di kulit, adem, dan mudah dirawat untuk dipakai sehari-hari.',
      },
      {
        title: 'Gaya yang tinggal',
        description:
          'Warna netral dan potongan yang melampaui musim, agar pieces ini terus kamu pakai—bukan sekadar disimpan.',
      },
    ],
  },
  lookbook: {
    eyebrow: 'Lookbook — Vol. 01',
    title: 'The art of',
    titleAccent: 'less.',
    intro:
      'Empat cara melihat Ji&Co—dari potongan sehari-hari sampai detail yang membuatnya terasa milikmu.',
    cta: {
      label: 'Lihat di Instagram',
      href: 'https://www.instagram.com/jiandco',
      external: true,
    },
    items: [
      {
        image: '/images/lookbook-motion.webp',
        imageAlt:
          'Perempuan mengenakan kaos putih dan jeans biru dalam pose melompat di studio',
        title: 'In motion',
        caption: 'White tee, blue denim, no rush.',
      },
      {
        image: '/images/lookbook-blazer.webp',
        imageAlt:
          'Perempuan mengenakan blazer putih oversize dengan celana berwarna lembut',
        title: 'Soft structure',
        caption: 'An oversized blazer, softly tailored.',
      },
      {
        image: '/images/lookbook-knit.webp',
        imageAlt:
          'Detail pullover rajut oat dipadukan dengan rok satin yang jatuh lembut',
        title: 'Texture story',
        caption: 'Soft knit, fluid satin.',
      },
      {
        image: '/images/lookbook-palette.webp',
        imageAlt:
          'Tiga cardigan rajut warna oat, ivory, dan biru tersusun di atas meja',
        title: 'The palette',
        caption: 'Oat, ivory, sky.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Kind Words',
    title: 'Dipakai, dicintai,',
    titleAccent: 'diulang.',
    intro:
      'Cerita kecil dari perempuan yang sudah membawa Ji&Co ke hari-harinya.',
    items: [
      {
        quote:
          'Bahannya jatuh dengan cantik dan nyaman dipakai seharian. The Linen Shirt langsung jadi favorit saya.',
        name: 'Alya',
        city: 'Jakarta',
      },
      {
        quote:
          'Suka banget sama potongannya—simple tapi tetap terlihat rapi. Cocok untuk kerja maupun weekend.',
        name: 'Nadia',
        city: 'Bandung',
      },
      {
        quote:
          'Akhirnya menemukan brand lokal yang fit-nya pas dan warna netralnya mudah dipadukan.',
        name: 'Rania',
        city: 'Surabaya',
      },
    ],
  },
  instagram: {
    eyebrow: '@jiandco',
    title: 'Stay',
    titleAccent: 'close.',
    intro:
      'Keseharian kami, koleksi terbaru, dan cerita di balik Ji&Co.',
    cta: {
      label: 'Ikuti @jiandco',
      href: 'https://www.instagram.com/jiandco',
      external: true,
    },
    images: [
      {
        image: '/images/story-workspace.webp',
        imageAlt: 'Meja kerja atelier dengan sketsa dan kain biru',
      },
      {
        image: '/images/ig-rack.webp',
        imageAlt: 'Hanger putih tersusun rapi di rail minimalis',
      },
      {
        image: '/images/product-linen.webp',
        imageAlt: 'Kemeja linen natural di rail putih',
      },
      {
        image: '/images/lookbook-motion.webp',
        imageAlt:
          'Perempuan mengenakan kaos putih dan jeans biru dalam pose melompat',
      },
    ],
  },
  newsletter: {
    eyebrow: 'The Ji&Co Circle',
    title: 'Jadi yang pertama',
    titleAccent: 'tahu.',
    description:
      'Akses awal ke koleksi baru, cerita dari balik layar, dan kejutan kecil—langsung ke inbox kamu.',
    placeholder: 'Email kamu',
    buttonLabel: 'Daftar',
    note: 'Kami tidak suka spam. Kamu bisa berhenti berlangganan kapan saja.',
    error: 'Masukkan alamat email yang valid.',
    successTitle: 'Terima kasih, kamu sudah di daftar.',
    successText: 'Sampai jumpa di inbox—dengan cerita pertama dari Ji&Co.',
  },
  footer: {
    blurb:
      'Fashion yang simple, sederhana, dan tetap trendi—dibuat untuk perempuan yang ingin tampil nyaman sebagai dirinya sendiri.',
    contactTitle: 'Hubungi',
    columns: [
      {
        title: 'Jelajahi',
        links: [
          { label: 'New In', href: '#new-in' },
          { label: 'The Blue Edit', href: '#blue-edit' },
          { label: 'Our Story', href: '#story' },
          { label: 'Lookbook', href: '#lookbook' },
        ],
      },
      {
        title: 'Studio',
        lines: [
          'Jakarta, Indonesia',
          'Senin–Jumat, 09.00–18.00 WIB',
          'Order online 24/7',
        ],
      },
    ],
    rights: '© 2026 Ji&Co. Seluruh hak cipta dilindungi.',
    creditPrefix: 'Fotografi demo oleh',
    creditLabel: 'Pexels',
    creditHref: 'https://www.pexels.com',
    backToTop: 'Kembali ke atas',
  },
  seo: {
    title: 'Ji&Co — Everyday Elegance, Made to Fit',
    description:
      'Ji&Co menghadirkan fashion kekinian yang simple, sederhana, namun tetap trendi. Potongan nyaman dan pas untuk banyak bentuk tubuh.',
    themeColor: '#A9C8FF',
  },
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat(brand.locale, {
    style: 'currency',
    currency: brand.currency,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(/\u00a0/g, ' ')
}
