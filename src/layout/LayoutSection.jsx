export const LayoutSection = ({ children, color }) => {
  return (
    <div
      className={`w-full h-screen ${color} flex justify-center items-center relative`}
    >
      {children}
    </div>
  )
}
