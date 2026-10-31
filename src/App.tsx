import { useEffect, type CSSProperties } from 'react'
import { brand } from './brand'
import Accessories from './components/Accessories'
import BlushEdit from './components/BlushEdit'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InstagramStrip from './components/InstagramStrip'
import Lookbook from './components/Lookbook'
import Marquee from './components/Marquee'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Values from './components/Values'

const themeStyle = (() => {
  const style: Record<string, string> = {}

  Object.entries(brand.theme.colors).forEach(([name, value]) => {
    style[`--${name}`] = value
  })

  style['--brand-display'] = brand.theme.fonts.display
  style['--brand-body'] = brand.theme.fonts.body

  return style as CSSProperties
})()

export default function App() {
  useEffect(() => {
    document.title = brand.seo.title

    const setMeta = (selector: string, value: string) => {
      document.head.querySelector(selector)?.setAttribute('content', value)
    }

    setMeta('meta[name="description"]', brand.seo.description)
    setMeta('meta[name="theme-color"]', brand.seo.themeColor)
    setMeta('meta[property="og:title"]', brand.seo.title)
    setMeta('meta[property="og:description"]', brand.seo.description)
  }, [])

  return (
    <div
      className="min-h-screen overflow-x-clip bg-main font-body text-ink"
      style={themeStyle}
    >
      <a
        className="fixed top-4 left-4 z-[200] -translate-y-[200%] bg-ink px-4 py-3 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase transition-transform focus:translate-y-0"
        href="#main"
      >
        Lewati ke konten
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Marquee />
        <Products />
        <Accessories />
        <BlushEdit />
        <Values />
        <Lookbook />
        <Testimonials />
        <InstagramStrip />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
