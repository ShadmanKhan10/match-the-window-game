import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavLogoLeft from "../assets/NavLogoLeft.png";
import NavLogoRight from "../assets/NavLogoRight.png";
import MsgIcon from "../assets/MsgIcon.png";
import UserIcon from "../assets/UserIcon.png";
import GameButton from "../assets/GameButton.png";
import SpotLight from "../assets/SpotLight.png";
import Cost from "../assets/Cost.png";
import Freshdesk from "../assets/Freshdesk.png";
import Freshsales from "../assets/Freshsales.png";
import Managed from "../assets/Managed.png";
import Freshservice from "../assets/Freshservice.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [start, setStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [prev, setPrev] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [shuffledItmes, setShuffledItmes] = useState([]);
  // const [prevOpen, setPrevOpen] = useState(true);

  const items = [
    {
      id: 1,
      name: "Spotlight",
      src: SpotLight,
    },
    {
      id: 2,
      name: "Managed",
      src: Managed,
    },
    {
      id: 3,
      name: "Freshdesk",
      src: Freshdesk,
    },
    {
      id: 4,
      name: "Cost",
      src: Cost,
    },
    {
      id: 5,
      name: "Freshsales",
      src: Freshsales,
    },
    {
      id: 6,
      name: "Freshservice",
      src: Freshservice,
    },
    {
      id: 7,
      name: "Spotlight",
      src: SpotLight,
    },
    {
      id: 8,
      name: "Managed",
      src: Managed,
    },
    {
      id: 9,
      name: "Freshdesk",
      src: Freshdesk,
    },
    {
      id: 10,
      name: "Cost",
      src: Cost,
    },
    {
      id: 11,
      name: "Freshsales",
      src: Freshsales,
    },
    {
      id: 12,
      name: "Freshservice",
      src: Freshservice,
    },
  ];

  // const shuffledItems = items.sort(() => Math.random() - 0.5);
  // useEffect(() => {
  //   setShuffled(shuffledItems);
  // }, []);

  const shuffled = items.sort(() => Math.random() - 0.5);
  useEffect(() => {
    setShuffledItmes(shuffled);
  }, []);

  const handleStartGame = () => {
    setToggle(true);
  };

  const handleRealStartGame = () => {
    // setToggle(false);
    setStart(true);
    console.log(start);
    const a = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(a);
          setStart(false);
          setTimeLeft(120);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleClickOpen = (data) => {
    setOpen(true);
    if (prev === "") {
      setOpen(true);
      setPrev(data);
    } else if (prev === data) {
      setOpen(true);
      setPrev("");
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  };

  const handleClickOpen2 = (data) => {
    setOpen2(true);
    if (prev === "") {
      setOpen2(true);
      setPrev(data);
    } else if (prev === data) {
      setOpen2(true);
      setPrev("");
    } else {
      setTimeout(() => {
        setOpen2(false);
      }, 1000);
    }
  };
  const handleClickOpen3 = (data) => {
    setOpen3(true);
    // if (prev === data || prev === "") {
    //   setOpen3(true);
    //   setPrev(data);
    // } else {
    //   setTimeout(() => {
    //     setOpen3(false);
    //   }, 1000);

    //   setPrev("");
    // }

    if (prev === "") {
      setOpen3(true);
      setPrev(data);
    } else if (prev === data) {
      setOpen3(true);
      setPrev("");
    } else {
      setTimeout(() => {
        setOpen3(false);
      }, 1000);
    }

    // setPrev("");
  };
  const handleClickOpen4 = (data) => {
    setOpen4(true);
    if (prev === "") {
      setOpen4(true);
      setPrev(data);
    } else if (prev === data) {
      setOpen4(true);
      setPrev("");
    } else {
      setTimeout(() => {
        setOpen4(false);
      }, 1000);
    }
  };
  // const handleGridClick = () => {

  // }

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
          <div
            className={
              start === true ? "grid-container" : "grid-container-blur"
            }
            // onClick={handleGridClick}
          >
            {shuffledItmes.map((item, idx) => (
              <div key={idx} className="grid-item">
                {start === false ? (
                  <img src={GameButton} alt="logo" className="game-logo" />
                ) : (
                  <img
                    src={start === false ? GameButton : item.src}
                    alt="logo"
                    className="game-logo"
                  />
                )}
              </div>
            ))}
          </div>
          <button className="start-btn" onClick={handleRealStartGame}>
            {start && timeLeft > 0 ? formatTime(timeLeft) : "START THE GAME"}
          </button>
        </div>
      )}
    </div>
  );
}
