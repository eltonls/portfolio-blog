import Nav from "./Nav"
import Widget from "./Widget"

const Header = () => {
  return (
    <header className="z-10 flex flex-row bg-background rounded overflow-hidden justify-between">
      <Nav /> 
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Widget type="clock" />
      </div>
    </header>
  )
}

export default Header
