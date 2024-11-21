import Header from "./components/Header";
import Hero from "./components/Hero";
import AIText from "./components/AIText";
import Services from "./components/Services";
import Features from "./components/Features";
function App() {
  return (
    <div className="min-h-screen bg-black w-full">
      <Header />
      <Hero />
      <AIText />
      <Services />
      <Features />
    </div>
  );
}

export default App;
