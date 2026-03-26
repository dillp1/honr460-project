"use client";
import Header from "./components/header";
import GoogleMap from "./components/GoogleMap";
import "./App.css";
import About from "./components/about";
import CaseStudy1 from "./components/CaseStudy1";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center p-4 gap-8 pt-24">
        <Header />
        <GoogleMap />
        <About />
        <CaseStudy1 />
      </div>
    </>
  );
}

export default App;
