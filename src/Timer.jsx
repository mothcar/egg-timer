import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0); // 58:58 in seconds
  const [men, setMen] = useState("Select"); // 58:58 in seconds
  const [isActive, setIsActive] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isPauseShow, setPauseShow] = useState(false);
  // const [result, setResult] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

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

  const handleTime = (value) => {
    // let time =
    if (time > 0) setTime(time + value);
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
              "url(https://therefillmill.ie/wp-content/uploads/2021/04/a95531_9025caf6d2a9450a9c5af4bed672f46cmv2.jpg)",
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
        <button onClick={() => handleTime(-20)} style={{ marginRight: "8px" }}>
          ➖ HARD
        </button>
        <button onClick={() => handleTime(30)}>➕ SOFT</button>
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
      </div>
    </div>
  );
}

export default Timer;
