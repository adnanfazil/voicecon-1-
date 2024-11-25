import Header from "./components/Header";
import Hero from "./components/Hero";
import AIText from "./components/AIText";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Voices from "./components/Voices";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-black w-full">
      <Header />
      <Hero />
      <AIText />
      <Services />
      <Features />
      <Pricing />
      <FAQ />
      <Voices />
      <Connect />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
