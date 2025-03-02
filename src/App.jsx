import Content from "./Components/Content"
import Navbar from "./Components/Navbar"
import Font from "./Assets/inside-fondo.png"

function App() {

  const bgImage = {
    backgroundImage: `url(${Font})`,
    backgroundRepeat: "no repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative"
  }

  return (
    <div style={bgImage} className="overflow-hidden min-h-screen">
    <Navbar/>
    <Content/>
    </div>
  )
}

export default App
