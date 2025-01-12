import React, { useState } from "react";
// import Todolist from "./button";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import ListCom from "./ListCom";

const ToDoList = () => {
  const [item, setItem] = useState(" ");

  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem(" ");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />

          <input
            type="text"
            value={item}
            placeholder="Add an item"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>

          <br />

          {newitem.map((val, index) => {
            return <ListCom key={index} text={val} />;
          })}

          <br />
        </div>
      </div>
    </>
  );
};
export default ToDoList;
