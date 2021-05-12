import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { listState } from "../atoms";

function AddToDo() {
  const [value, setValue] = useState("");
  const setTodoList = useSetRecoilState(listState);

  const add = () => {
    if (value !== "") {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: oldTodoList.length+1,
          text: value,
          completed: false,
        },
      ]);
    }
  };

  const onChange = ({target: {value}}) => {
    setValue(value);
  };

  return (
    <div className="add-todo">
      <label for="add-todo">New Task</label>
      <input className="text-field" type="text" id="add-todo" autoFocus required="required" value={value} onChange={onChange} />
      <button id="submit" onClick={add}>Add</button>
    </div>
  )
}

export default AddToDo;
