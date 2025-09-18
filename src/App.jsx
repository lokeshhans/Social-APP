import './App.css'
import Navbar from './Components/NavBar'
// import SocialApp from './Components/SocialApp'
import CustomRouter from './CustomRouter/CustomRouter'

function App() {

  return (
    <>
      <Navbar />
       {/* <SocialApp /> Render the social app */}
      <CustomRouter />
    </>
  )
}

export default App
