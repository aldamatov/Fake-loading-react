import "./styles.css";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  /* From Countdown project */
  const newYears = "1 Jan 2023";
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSec = (newYearsDate - currentDate) / 1000;

  const [finalTime, setFinal] = useState(totalSec);
  const [countdown, setCountdown] = useState(0);

  const day = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(finalTime / 3600) % 24;
  const minutes = Math.floor(finalTime / 60) % 60;
  const seconds = Math.floor(finalTime) % 60;

  const handleStart = () => {
    setCountdown(
      setInterval(() => {
        setFinal((finalTime) => finalTime - 1);
      }, 1000)
    );
  };
  const handleStop = () => {
    if (countdown) {
      clearInterval(countdown);
    }
    setCountdown(0);
  };
  /* End Countdown project
   */

  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <img
            className="img"
            src="https://c.tenor.com/WTiEqCVvejcAAAAC/happynewyear-2017.gif"
            alt=""
          />
          <ClipLoader
            className="loader"
            color={"#190EE9"}
            loading={loading}
            size={100}
          />
        </div>
      ) : (
        /* Countdown Project */
        <div className="image-bg">
          <h1>New Years Eve 2023 </h1>
          <div className="countdown-container">
            <div className="countdown-el days-c">
              <p className="big-text" id="days">
                {day}
              </p>
              <span>days</span>
            </div>
            <div className="countdown-el hours-c">
              <p className="big-text" id="hours">
                {hours}
              </p>
              <span>hours</span>
            </div>
            <div className=" countdown-el minutes-c">
              <p className="big-text" id="minutes">
                {minutes}
              </p>
              <span>min</span>
            </div>
            <div className=" countdown-el seconds-c">
              <p className="big-text" id="seconds">
                {seconds}
              </p>
              <span>sec</span>
            </div>
          </div>
          {countdown ? (
            <button onClick={handleStop}> Stop </button>
          ) : (
            <button onClick={handleStart}> Start</button>
          )}
        </div>
      )}
    </div>
  );
}
