import Content from "./Components/Content"
import Navbar from "./Components/Navbar"
import Font from "./Assets/inside-fondo.png"

function App() {

  const bgImage = {
    backgroundImage: `url(${Font})`,
    backgroundRepeat: "no repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    position: "relative"
  }

  return (
   
      <div style={bgImage} className="overflow-hidden min-h-screen bg-[url('/Assets/inside-fondo.png')] bg-cover bg-bottom g-[length:00px_00px] sm:bg-no-repeat sm:bg-top">
    <Navbar/>
    <Content/>
    </div>

  )
}

export default App




