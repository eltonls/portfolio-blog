import { SiArchlinux } from "react-icons/si"
import Nav from "./Nav"
import Widget from "./Widget"

const Header = () => {
  return (
    <header className="flex flex-row bg-background m-5 rounded overflow-hidden justify-between">
      <Nav /> 
      <div className="flex flex-row items-center">
        <Widget type="clock" />
        <Widget type="battery" />
      </div>
    </header>
  )
}

export default Header
