import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

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
    </div>
  )
}

export default App;