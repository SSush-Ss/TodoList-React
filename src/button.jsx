import React, { useState } from "react ";

const Todolist = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    setNum(num - 1);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num} </h1>

          <div className="btn_div"></div>
          <button onClick={incNum}>Increm</button>
          <button onClick={decNum}>Decrem</button>
        </div>
      </div>
    </>
  );
};

export default Todolist;
