import React, { useState, useEffect, useRef } from "react";
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
import axios from "axios";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [start, setStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [shuffledItmes, setShuffledItmes] = useState([]);
  const [flag, setFlag] = useState(false);
  const [prevId, setPrevId] = useState();
  const [buttonStart, setButtonStart] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [prevIndex, setPrevIndex] = useState();
  const [rotate, setRotate] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userId = useRef();
  const timeTook = useRef(0);

  const items = [
    {
      id: 1,
      flag: flag,
      name: "Spotlight",
      src: SpotLight,
      rotate: false,
    },
    {
      id: 2,
      flag: flag,
      name: "Managed",
      src: Managed,
      rotate: false,
    },
    {
      id: 3,
      flag: flag,
      name: "Freshdesk",
      src: Freshdesk,
      rotate: false,
    },
    {
      id: 4,
      flag: flag,
      name: "Cost",
      src: Cost,
      rotate: false,
    },
    {
      id: 5,
      flag: flag,
      name: "Freshsales",
      src: Freshsales,
      rotate: false,
    },
    {
      id: 6,
      flag: flag,
      name: "Freshservice",
      src: Freshservice,
      rotate: false,
    },
    {
      id: 1,
      flag: flag,
      name: "Spotlight",
      src: SpotLight,
      rotate: false,
    },
    {
      id: 2,
      flag: flag,
      name: "Managed",
      src: Managed,
      rotate: false,
    },
    {
      id: 3,
      flag: flag,
      name: "Freshdesk",
      src: Freshdesk,
      rotate: false,
    },
    {
      id: 4,
      flag: flag,
      name: "Cost",
      src: Cost,
      rotate: false,
    },
    {
      id: 5,
      flag: flag,
      name: "Freshsales",
      src: Freshsales,
      rotate: false,
    },
    {
      id: 6,
      flag: flag,
      name: "Freshservice",
      src: Freshservice,
      rotate: false,
    },
  ];

  const size = useRef(0);

  const shuffled = items.sort(() => Math.random() - 0.5);
  useEffect(() => {
    setShuffledItmes(shuffled);
  }, []);

  const handleStartGame = () => {
    if (name === "" && email === "") {
      alert("required");
      // setToggle(false);
    } else {
      handleSave();
    }
  };

  const handleRealStartGame = () => {
    const time = setInterval(() => {
      timeTook.current = timeTook.current + 1;
      console.log("_____________", timeTook.current);
      if (size.current === 12) {
        clearInterval(time);
        console.log("Time taken", timeTook.current);
      }
    }, 1000);

    setStart(true);
    setButtonStart(true);
    console.log(start);
    const a = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(a);
          setStart(false);
          setTimeLeft(120);
        } else if (size.current === 12) {
          console.log("Stop timer");
          sendTime();
          clearInterval(a);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendTime = async () => {
    console.log("time taken", timeTook.current);
    const response = await axios.put("http://192.168.1.8:3003/updateusertime", {
      timetaken: timeTook.current,
      _id: userId.current,
    });
    console.log(response);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleImageClick = (index, name, id) => {
    console.log("inside first handle");
    setOpenImage(true);
    console.log(id);
    setPrevId(id);
    setPrevIndex(index);
    shuffledItmes[index].flag = true;
    shuffledItmes[index].rotate = true;
  };

  const handleImage2Click = async (index, name, id) => {
    shuffledItmes[prevIndex].flag = true;
    shuffledItmes[index].flag = true;
    shuffledItmes[prevIndex].rotate = true;
    shuffledItmes[index].rotate = true;
    if (prevId === id) {
      console.log("matched");
      shuffledItmes[prevIndex].flag = true;
      shuffledItmes[index].flag = true;
      shuffledItmes[prevIndex].rotate = true;
      shuffledItmes[index].rotate = true;
      size.current = size.current + 2;

      console.log("Items Remaining", size.current);
      setOpenImage(false);
    } else {
      console.log("not matched");
      setTimeout(() => {
        shuffledItmes[prevIndex].flag = false;
        shuffledItmes[index].flag = false;
        shuffledItmes[prevIndex].rotate = false;
        shuffledItmes[index].rotate = false;
        setOpenImage(false);
      }, 1000);

      setOpenImage(false);
    }
  };

  const handleClick = () => {
    setRotate((prev) => {
      return prev === true ? false : true;
    });
    console.log("image clicked");
  };

  const handleSave = async () => {
    const newUser = { name, email };
    try {
      const response = await axios.post(
        "http://192.168.1.8:3003/userRegistration",
        newUser
      );
      console.log("User added:", response.data);
      console.log(response.data.data._id);
      userId.current = response.data.data._id;
      console.log(userId.current);
      if (response.status === 200) {
        setToggle(true);
      }

      // setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error adding user:", error);
      if (response.status !== 200) {
        console.log("Error Registering");
      }
    }
  };

  return (
    <div className="container">
      {size.current === 12 && (
        <div className="p-tag-div">
          {" "}
          <p className="time-left-text">
            You Completed the game in {timeTook.current} seconds
          </p>
        </div>
      )}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your e-mail address"
              className="input-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              start === true && size.current != 12
                ? "grid-container"
                : "grid-container-blur"
            }
          >
            {shuffledItmes.map((item, idx) => (
              <div
                key={idx}
                className="grid-item"
                onClick={() => {
                  if (openImage === false) {
                    handleImageClick(idx, item.name, item.id);
                  } else {
                    handleImage2Click(idx, item.name, item.id);
                  }
                }}
              >
                <img
                  src={item.flag === true ? item.src : GameButton}
                  alt="logo"
                  className={item.rotate ? "game-logo-rotate" : "game-logo"}
                  // onClick={handleClick}
                />
              </div>
            ))}
          </div>
          <button className="start-btn" onClick={handleRealStartGame}>
            {/* {start && timeLeft > 0 ? formatTime(timeLeft) : "START THE GAME"} */}
            {buttonStart && timeLeft > 0
              ? formatTime(timeLeft)
              : "START THE GAME"}
          </button>
        </div>
      )}
    </div>
  );
}
