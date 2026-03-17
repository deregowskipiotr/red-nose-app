import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";
import { Story } from "./components/Story";
import { Contact } from "./components/Contact";
import Wines from "./components/Wines";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* The MASTERPIECE background */}
      <div className="bg-luxury-pattern fixed inset-0">
        <div className="fresco-layer" />
        <div className="spotlight" />
        <div className="architectural-detail" />
        <div className="particles" />
      </div>

      <Navbar />  
      <Hero />
      <Shop />
      <Story />
      <Wines />
      <Contact />
    </div>
  )
}

export default App;