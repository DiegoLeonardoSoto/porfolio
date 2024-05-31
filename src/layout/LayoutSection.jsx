export const LayoutSection = ({ children, styles = '', name }) => {
  return (
    <section
      id={name}
      className={`w-screen overflow-hidden flex flex-col justify-center items-center relative ${styles}`}
    >
      {children}
    </section>
  )
}
