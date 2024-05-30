export const LayoutSection = ({ children, color = '', name }) => {
  return (
    <section
      id={name}
      className={`w-screen overflow-hidden h-screen ${color} flex justify-center items-center relative`}
    >
      {children}
    </section>
  )
}
