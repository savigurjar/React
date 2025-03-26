import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
function Stopwatch() {
  const [time, settime] = useState(0);
  const intervalref = useRef(null);
  const [isrunning, setIsRunning] = useState(false);

  function start() {
    if (!isrunning) {
      intervalref.current = setInterval(() => {
        //   settime(time + 1);
        //  //ye wale varible ke under time ki latest value chli jayegi and eske pas bhi callback hota h
        settime((prevtime) => prevtime + 1);
        console.log(time);
      }, 1000);
    }
    setIsRunning(true);
  }
  function stop() {
    if (isrunning) {
      clearInterval(intervalref.current);
      intervalref.current = null;
      setIsRunning(false);
    }
  }
  function reset() {
    clearInterval(intervalref.current);
    intervalref.current = null;
    settime(0);
  }
  return (
    <>
      <h1>Stopwatch is : {time}</h1>
      <button onClick={start}>Start</button>
      {/* <button onClick={() => start()}>Start</button> */}

      <br></br>
      <br></br>

      <button onClick={stop}>Stop</button>

      <br></br>
      <br></br>

      <button onClick={reset}>Restart</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stopwatch />);
