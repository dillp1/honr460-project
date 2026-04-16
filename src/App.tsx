"use client";
import Header from "./components/header";
import Hero from "./components/Hero";
import GoogleMap from "./components/GoogleMap";
import "./App.css";
import About from "./components/about";
import Footer from "./components/Footer";
import HarrisonHallCard from "./components/HarrisonHallCard";
import PhysicsBuildingCard from "./components/PhysicsBuildingCard";
import WindsorDiningCourtCard from "./components/WindsorDiningCourtCard";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-8 pt-24">
        <Header />
        <Hero />
        <GoogleMap />
        <HarrisonHallCard />
        <WindsorDiningCourtCard />
        <PhysicsBuildingCard />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
