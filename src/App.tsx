"use client";
import Header from "./components/header";
import Hero from "./components/Hero";
import GoogleMap from "./components/GoogleMap";
import "./App.css";
import About from "./components/about";
import CaseStudy1 from "./components/CaseStudy1";
import Footer from "./components/Footer";
import CaseStudy3 from "./components/CaseStudy3";
import CaseStudy2 from "./components/CaseStudy2";
import CaseStudy4 from "./components/CaseStudy4";
import CaseStudy5 from "./components/CaseStudy5";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-8 pt-24">
        <Header />
        <Hero />
        <GoogleMap />
        <About />
        <CaseStudy1 />
        <CaseStudy2 />
        <CaseStudy3 />
        <CaseStudy4 />
        <CaseStudy5 />
        <Footer />
      </div>
    </>
  );
}

export default App;
