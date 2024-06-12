export const LayoutSection = ({ children, styles = "", name }) => {
  return (
    <section
      id={name}
      className={`relative flex flex-col items-center justify-center overflow-hidden ${styles}`}
    >
      {children}
    </section>
  );
};
