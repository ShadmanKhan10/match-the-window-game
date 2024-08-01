import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavLogoLeft from "../assets/NavLogoLeft.png";
import NavLogoRight from "../assets/NavLogoRight.png";
import MsgIcon from "../assets/MsgIcon.png";
import UserIcon from "../assets/UserIcon.png";
import GameButton from "../assets/GameButton.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [start, setStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12);

  const handleStartGame = () => {
    setToggle(true);
  };

  const handleRealStartGame = () => {
    // setToggle(false);
    setStart(true);
    const a = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(a);
          setStart(false);
          setTimeLeft(12);
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="container">
      <div className="container-navbar">
        <div className="logo-container-right">
          {" "}
          <img src={NavLogoLeft} alt="logo" className="logo-left" />
        </div>
        <div className="logo-container-left">
          <img src={NavLogoRight} alt="logo" className="logo-right" />
        </div>
      </div>
      {toggle === false && (
        <div>
          <div className="heading-container-div">
            <div className="main-heading">
              <h1 className="main-heading-text1">TECHVOLVE RECALL</h1>
              <div className="main-heading-text2">
                Solve the memory game in 1 min!
              </div>
            </div>
            <div className="sub-heading">
              <p className="sub-heading-text">
                Please enter your details below to get started
              </p>
            </div>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your name"
              className="input-name"
            />
            <input
              type="text"
              placeholder="Enter your e-mail address"
              className="input-email"
            />
          </div>
          <div className="msg-icon-div">
            <img src={MsgIcon} alt="icon" className="msg-icon" />
          </div>
          <div className="user-icon-div">
            <img src={UserIcon} alt="icon" className="user-icon" />
          </div>
          <button className="start-btn" onClick={handleStartGame}>
            START THE GAME
          </button>
        </div>
      )}
      {toggle === true && (
        <div className="game-container">
          <div className="game-heading-div">
            <h1 className="main-heading-text1">TECHVOLVE RECALL</h1>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
            <div className="grid-item">
              <img
                src={GameButton}
                alt="logo"
                className={start === true ? "game-logo" : "load-game-logo"}
              />
            </div>
          </div>
          <button className="start-btn" onClick={handleRealStartGame}>
            {start === true && timeLeft > 0 ? timeLeft : "START THE GAME"}
          </button>
        </div>
      )}
    </div>
  );
}
