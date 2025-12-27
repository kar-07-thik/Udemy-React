//import components
import Navbar from "./components/Navbar.js";
import MenuBar from "./components/Menubar.js";
import Ad from "./components/Ad.js"
import Recommended from "./components/Recommended.js"
import Topics from "./components/Topics.js"
import MostPopular from "./components/MostPopular.js"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MenuBar></MenuBar>
      <Ad></Ad>
      <Recommended></Recommended>
      <Topics></Topics>
      <MostPopular></MostPopular>
      <Footer></Footer>
    </>
  )
}
export default App
