import { useEffect, useRef } from "react";

export const LayoutInfiniteScroll = ({ children, direction = "left" }) => {
  const scroller = useRef();

  const duplicateContent = () => {
    const scrollItems = Array.from(scroller.current.children);
    scrollItems.forEach((item) => {
      const itemClone = item.cloneNode(true);
      itemClone.setAttribute("aria-hidden", true);
      scroller.current.appendChild(itemClone);
    });
  };

  useEffect(() => {
    duplicateContent();
  }, []);

  return (
    <div className="relative mx-auto my-auto w-full overflow-hidden rounded-3xl bg-neutral-100 p-8 before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-8 before:bg-neutral-100 before:content-[''] after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-8 after:bg-neutral-100 after:content-[''] md:w-3/4 md:px-16 md:py-12 md:before:w-16 md:after:w-16">
      <ul
        ref={scroller}
        className={`flex w-max flex-wrap gap-12 md:gap-20 ${
          direction === "left" ? "animate-scroll" : "animate-scroll_reverse"
        }`}
      >
        {children}
      </ul>
    </div>
  );
};
