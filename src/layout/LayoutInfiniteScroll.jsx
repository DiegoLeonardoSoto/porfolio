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
    <div className="bg-neutral-100 mb-10 px-16 py-12 rounded-3xl overflow-hidden max-w-[50rem]">
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
