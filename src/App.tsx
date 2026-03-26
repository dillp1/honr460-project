"use client";
import Header from "./components/header";
import GoogleMap from "./components/GoogleMap";
import "./App.css";
import About from "./components/about";
import CaseStudy1 from "./components/CaseStudy1";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center gap-8 pt-24">
        <Header />
        <GoogleMap />
        <About />
        <CaseStudy1 />
        <Footer />
      </div>
    </>
  );
}

export default App;
