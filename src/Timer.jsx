import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0); // 58:58 in seconds
  const [men, setMen] = useState("Select"); // 58:58 in seconds
  const [isActive, setIsActive] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isPauseShow, setPauseShow] = useState(false);
  const [isStop, setStop] = useState(false);
  const [audio, setAudio] = useState("");
  // const [result, setResult] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setStop(true)
      setPauseShow(false)
      const audio = new Audio('/alarm.mp3');
      setAudio(audio)
      audio.loop = true;
      audio.play()      
    }
    return () => clearInterval(interval);
  }, [isActive, time, men]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setShow(false);
    setPauseShow(true);
  };
  const handlePause = () => {
    setShow(true);
    setPauseShow(false);
    setIsActive(false);
  };
  // const handleEdit = () => {
  //   const newTime = prompt("Enter new time in MM:SS format");
  //   if (newTime) {
  //     const [mins, secs] = newTime.split(":").map(Number);
  //     setTime(mins * 60 + secs);
  //   }
  // };

  const handleRamenClick = (value) => {
    switch (value) {
      case 210:
        setMen("Cup Noodle");
        break;
      case 240:
        setMen("Ramen");
        break;
      case 600:
        setMen("Spagetti");
        break;
    }
    setTime(value);
    setShow(true);
  };

  const handleStop = () => {
    setStop(false)
    audio.loop = false;
    audio.pause();
  };
  const handleTime = (value) => {
    // let time =
    if (value ==10 || time > 10) setTime(time + value);
    else alert("Choose Ramen first!");
  };

  return (
    <div className="timer">
      <div>
        <button
          style={{
            backgroundImage:
              "url(https://img.danawa.com/prod_img/500000/839/238/img/1238839_1.jpg?_v=20231006084554)",
            backgroundSize: "cover",
            width: "80px",
            height: "80px",
            marginRight: "8px",
          }}
          onClick={() => handleRamenClick(210)}
        ></button>
        <button
          style={{
            backgroundImage:
              "url(https://image.nongshim.com/non/pro/1647822522999.jpg)",
            backgroundSize: "cover",
            width: "80px",
            height: "80px",
            marginRight: "8px",
          }}
          onClick={() => handleRamenClick(240)}
        ></button>
        <button
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/mothcar/image/upload/v1724128990/timer/spagetti1_1.webp)",
            backgroundSize: "cover",
            alignSelf: "center",
            width: "80px",
            height: "80px",
            marginRight: "0px",
          }}
          onClick={() => handleRamenClick(600)}
        ></button>
        {/* <button onClick={() => handleRamenClick(240)}>🍌 신라면</button> */}
      </div>

      <div>
        <h3>{men}</h3>
      </div>

      <div style={{ marginTop: "80px" }}>
        <button onClick={() => handleTime(-10)} style={{ marginRight: "8px" }}>
          ➖ HARD
        </button>
        <button onClick={() => handleTime(10)}>➕ SOFT</button>
      </div>

      <div className="timer-display">{formatTime(time)}</div>
      <div className="controls">
        {/* <button className="edit" onClick={handleEdit}>
          Edit Timer
        </button> */}
        {isPauseShow ? (
          <button className="reset" onClick={handlePause}>
            Pause
          </button>
        ) : (
          ""
        )}
        {isShow ? (
          <button className="start" onClick={handleStart}>
            Start
          </button>
        ) : (
          ""
        )}
        {isStop ? (
          <button className="start" onClick={handleStop}>
            End
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Timer;
