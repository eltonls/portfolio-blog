import { SiArchlinux } from "react-icons/si"

const Nav = () => {
  return (
    <nav className="flex flex-row items-center">
      <div className="bg-foreground w-30 mr-2 p-2">
        <SiArchlinux className="text-3xl" />
      </div>
      <ul className="flex flex-row justify-between ">
        <li className="text-foreground font-sans border-r border-r-foreground mr-2 pr-2 hover:underline transition-all">
          Projetos
        </li>
        <li className="text-foreground font-sans border-r border-r-foreground mr-2 pr-2 hover:underline transition-all">
          Blog
        </li>
        <li className="text-foreground font-sans mr-2 pr-2 hover:underline transition-all">
          Sobre Mim
        </li>
      </ul>
    </nav>
  )
}

export default Nav
