import { useRef, useState } from 'react'

export function useCarousel<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [edges, setEdges] = useState({ prev: false, next: true })

  const update = () => {
    const node = ref.current
    if (!node) return

    setEdges({
      prev: node.scrollLeft > 4,
      next: node.scrollLeft + node.clientWidth < node.scrollWidth - 4,
    })
  }

  const scroll = (direction: 1 | -1) => {
    const node = ref.current
    if (!node) return

    node.scrollBy({
      left: direction * node.clientWidth * 0.85,
      behavior: 'smooth',
    })
  }

  return { ref, edges, update, scroll }
}
