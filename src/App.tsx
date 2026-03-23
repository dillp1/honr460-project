"use client";
import Header from "./components/header";
import GoogleMap from "./components/GoogleMap";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center p-4 gap-8 pt-24">
        <Header />
        <GoogleMap />
        <About />
      </div>
    </>
  );
}

export default App;
