import React, { useState } from "react";

// const App = () => {
//   // const state = useState();

//   let newTime = new Date().toLocaleTimeString();
//   // const [count, setCount] = useState(50);
//   // const IncNum = () => {
//   //   setCount(count + 5);
//   //   // console.log("clicked" + count++);
//   // };
//   const [cTime, setCtime] = useState(newTime);
//   const UpdateTime = () => {
//     newTime = new Date().toLocaleTimeString();
//     setCtime(newTime);
//   };

//   setInterval(UpdateTime, 1000);

//   return (
//     <>
//       <h1>{cTime}</h1>
//       {/* <button onClick={UpdateTime}>Get Time </button> */}
//     </>
//   );
// };

// const App = () => {
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);

//   const [pasta, setpasta] = useState("Click Me");
//   const bgChange = () => {
//     // const purple = "#8e44ar";
//     let newColor = "yellow";
//     setBg(newColor);

//     setpasta("Ouch!! :alien:");
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onClick={bgChange}> {pasta}</button>
//       </div>
//     </>
//   );
// };

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameNew, setLastNameNew] = useState("");
  // const inputEvent = (event) => {
  //   console.log("clicked");
  // };

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setfullName(name);
    setLastName(lastName);
    setLastNameNew(lastNameNew);
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName}
              {lastNameNew}
            </h1>
            <input
              type="text"
              placeholder="Enter your name "
              onChange={inputEvent}
              value={name}
            />

            <br />
            <input
              type="text"
              placeholder="Enter your name "
              onChange={inputEventTwo}
              value={lastName}
            />
            <button type="submit" onClick={onSubmit}>
              Submit Me 👍{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
