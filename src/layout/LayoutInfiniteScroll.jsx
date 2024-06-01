import { useEffect, useRef } from 'react'

export const LayoutInfiniteScroll = ({ children, direction = 'left' }) => {
  const scroller = useRef()

  const duplicateContent = () => {
    const scrollItems = Array.from(scroller.current.children)
    scrollItems.forEach((item) => {
      const itemClone = item.cloneNode(true)
      itemClone.setAttribute('aria-hidden', true)
      scroller.current.appendChild(itemClone)
    })
  }

  useEffect(() => {
    duplicateContent()
  }, [])

  return (
    <div className="relative bg-neutral-100 px-16 py-12 rounded-3xl overflow-hidden w-3/4 mx-auto my-auto after:content-[''] after:w-16 after:h-full after:absolute after:z-20 after:top-0 after:right-0 after:bg-neutral-100 before:content-[''] before:w-16 before:h-full before:absolute before:z-20 before:top-0 before:left-0 before:bg-neutral-100">
      <ul
        ref={scroller}
        className={`flex gap-20 flex-wrap w-max ${
          direction === 'left' ? 'animate-scroll' : 'animate-scroll_reverse'
        }`}
      >
        {children}
      </ul>
    </div>
  )
}
