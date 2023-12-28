import { useState } from "react"
import { GrArchlinux } from "react-icons/gr";
import { MdMenu, MdClose } from "react-icons/md"
import { Link } from "react-router-dom"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonOpen = () => {
    setIsOpen(true);
  }
  
  const handleMenuButtonClose = () => {
    setIsOpen(false);
  }

  return (
    <nav className="z-10 flex flex-row items-center justify-between w-full">
      <div className="bg-foreground w-30 mr-2 p-2">
        <Link to="/">
          <GrArchlinux className="text-3xl text-gray-900" />
        </Link>
      </div>
      <div>
        <button className="text-foreground text-2xl px-2 sm:hidden" onClick={handleMenuButtonOpen}>
          <MdMenu />
        </button>
        <ul className={`bg-background sm:w-auto sm:h-auto sm:relative sm:flex sm:flex-row sm:justify-between ${isOpen ? 'flex top-0 left-0 fixed w-screen h-screen flex-col items-center justify-center text-xl' : "hidden"}`}>
          <button className="text-foreground text-2xl px-2 absolute top-7 right-7 sm:hidden" onClick={handleMenuButtonClose}>
            <MdClose />
          </button>
          <li className="text-foreground my-3 font-sans sm:border-r sm:border-r-foreground mr-2 pr-2 hover:underline transition-all">
            <Link to="/projects">Projetos</Link>
          </li>
          <li className="text-foreground my-3 font-sans mr-2 pr-2 hover:underline transition-all">
            <Link to="/about">Sobre mim</Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav
