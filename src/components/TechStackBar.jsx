import { LayoutInfiniteScroll } from "../layout/LayoutInfiniteScroll";

export const TechStackBar = () => {
  const stack = [
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "tailwind-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "react-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "javascript-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "typescript-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "html-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "css-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      alt: "redux-logo",
    },
  ];

  return (
    <LayoutInfiniteScroll>
      {stack.map(({ imgSrc, alt }) => {
        return (
          <li key={crypto.randomUUID()}>
            <img
              src={imgSrc}
              alt={alt}
              className="w-28 grayscale  duration-500 hover:grayscale-0 "
            />
          </li>
        );
      })}
    </LayoutInfiniteScroll>
  );
};
