import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = ({user}) => {
  return (
    <div className="p-5 sm:m-5 sm:rounded-xl bg-alura-200 dark:bg-dark-200 flex justify-between items-center">
      <span className="text-gray-100">Hello {user?.name || "User"}</span>
      <h1>Aluraaaaaaaaa</h1>
      <ToggleTheme />
    </div>
  )
}

export default Header