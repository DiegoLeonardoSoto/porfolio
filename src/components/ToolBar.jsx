import { LayoutInfiniteScroll } from "../layout/LayoutInfiniteScroll";

export const ToolBar = () => {
  const tools = [
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "git-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      alt: "postman-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
      alt: "bash-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
      alt: "photoshop-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
      alt: "ilustrator-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      alt: "vite-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      alt: "firebase-logo",
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      alt: "figma-logo",
    },
  ];
  return (
    <LayoutInfiniteScroll direction="right">
      {tools.map(({ imgSrc, alt }) => {
        return (
          <li key={crypto.randomUUID()}>
            <img
              src={imgSrc}
              alt={alt}
              className="w-14 grayscale duration-500 hover:grayscale-0 md:w-28"
            />
          </li>
        );
      })}
    </LayoutInfiniteScroll>
  );
};
