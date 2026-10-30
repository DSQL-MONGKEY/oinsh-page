import { useEffect, type CSSProperties } from 'react'
import { brand } from './brand'
import BlueEdit from './components/BlueEdit'
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

  style['--font-display'] = brand.theme.fonts.display
  style['--font-body'] = brand.theme.fonts.body

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
    <div className="site" style={themeStyle}>
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Products />
        <BlueEdit />
        <Story />
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
