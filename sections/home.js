import React from "react";
import ControlledCarousel from "../components/carousel";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../pages/_app";

const Home = () => {
  function download(e) {
    e.preventDefault();
    const URL = "/files/Md. Asaduzzaman.pdf";
    if (typeof window !== "undefined") {
      window.location.href = URL;
      const analytics = getAnalytics(app);
      logEvent(analytics, "resume_downloaded");
    }
  }

  return (
    <>
      <div className="home-container home-wrapper" id="home">
        <ControlledCarousel />
        <div className="introduce">
          <div className="content">
            <h2>ARABIN</h2>
            <h2>ARABIN</h2>
          </div>
          <div className="overflow-hidden mb-1">
            <p className="about">Full stack web Developer</p>
          </div>
          <button className="resume-button" onClick={(e) => download(e)}>
            MY RESUME
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
