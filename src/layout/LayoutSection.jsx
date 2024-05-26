export const LayoutSection = ({ children, color = '' }) => {
  return (
    <div
      className={`w-screen overflow-hidden h-screen ${color} flex justify-center items-center relative`}
    >
      {children}
    </div>
  )
}
