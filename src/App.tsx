"use client";
import Header from "./components/header";
import GoogleMap from "./components/GoogleMap";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center p-4 pt-24">
        <Header />
        <GoogleMap />
      </div>
    </>
  );
}

export default App;
