import React, { useRef, useEffect } from "react";
import "../css/LandingPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../components/Button";

export function LandingPage() {
  const main = useRef();
  const afterMain = useRef();

  useEffect(() => {
    const mainOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    };

    const mainObserver = new IntersectionObserver((entries, observer) => {
      if (!afterMain.current || !main.current) return
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          afterMain.current.classList.add("fadeIn");
          afterMain.current.classList.remove("fadeOut");
          main.current.classList.add("fadeOut");
          main.current.classList.remove("fadeIn");
        } else {
          afterMain.current.classList.add("fadeOut");
          afterMain.current.classList.remove("fadeIn");
          main.current.classList.add("fadeIn");
          main.current.classList.remove("fadeOut");
        }
      });
    }, mainOptions);

    mainObserver.observe(main.current);
    mainObserver.observe(afterMain.current);

    return () => {
      if (!afterMain.current || !main.current) return
      mainObserver.unobserve(main.current);
      mainObserver.unobserve(afterMain.current);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#f9f4e3" }}>
      <div className="main fadeIn" ref={main}>
        <h1 className="heroSection">
          <span className="B">B</span>
          <span className="R">R</span>
          <span className="E-1">E</span>
          <span className="E-2">E</span>
          <span className="Z">Z</span>
          <span className="Y">Y</span>
        </h1>
      </div>
      <div className="afterMain fadeOut" ref={afterMain}>
        <div className= "flex flex-col justify-center items-center">
          <div className="flex gap-4">
            <Button text={"Breathe"} color="#ffc9c9" to="/breathe" />
            <Button text={"Calender"} color="#FFEC99" to="/calendar" />
          </div>
        </div>
        <Button text={"Notes"} color="#B2F2BB" to="/notes" />
      </div>
    </div>
  );
}
