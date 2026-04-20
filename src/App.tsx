"use client";
import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import GoogleMap from "./components/GoogleMap";
import "./App.css";
import About from "./components/about";
import Footer from "./components/Footer";
import HarrisonHallCard from "./components/HarrisonHallCard";
import WindsorDiningCourtCard from "./components/WindsorDiningCourtCard";
import DudleyLambertusCard from "./components/DudleyLambertusCard";
import HonorsSouthCard from "./components/HonorsSouth";
import SurveyBanner from "./components/SurveyBanner";

function App() {
  const [isSurveyBannerVisible, setIsSurveyBannerVisible] = useState(true);
  const surveyLink =
    "https://purdue.ca1.qualtrics.com/jfe/form/SV_2bPmS6UdyaeBPlY";

  return (
    <>
      <div
        className={`flex min-h-screen flex-col items-center gap-8 ${
          isSurveyBannerVisible ? "pt-40" : "pt-24"
        }`}
      >
        <Header />
        {isSurveyBannerVisible ? (
          <SurveyBanner
            href={surveyLink}
            onClose={() => setIsSurveyBannerVisible(false)}
          />
        ) : null}
        <Hero />
        <GoogleMap />
        <HarrisonHallCard />
        <WindsorDiningCourtCard />
        <DudleyLambertusCard />
        <HonorsSouthCard />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
