import { FaClock } from "react-icons/fa"
import { FaBatteryFull } from "react-icons/fa"

type WidgetPropsType = {
  type: string
}

const Widget = (props: WidgetPropsType) => {

  if(props.type === "clock") {
    return (
      <div className="w-42 flex flex-row h-4/5 bg-backgroundtwo text-white items-center rounded overflow-hidden mx-2">
        <div className="w-2/5 text-background bg-green-300 py-2 px-1.5">
          <FaClock className="text-2xl" />
        </div>
        <div className="w-3/5 p-2 text-foreground font-sans font-semibold">
          20:00
        </div>
      </div>
    )
  }

  if(props.type === "battery") {
    return (
      <div className="w-42 flex flex-row h-4/5 bg-backgroundtwo text-white items-center rounded overflow-hidden mx-2">
        <div className="w-2/5 text-background bg-orange-300 py-2 px-1.5">
          <FaBatteryFull className="text-2xl" />
        </div>
        <div className="w-3/5 p-2 text-foreground font-sans font-semibold">
          94%
        </div>
      </div>
    )
  }
}

export default Widget
