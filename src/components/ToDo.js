import React from "react";
import { useRecoilState } from 'recoil';

import {  listState, completedState } from "../atoms"


function ToDo(props) {
  const [isCompleted, setIsCompleted] = useRecoilState(completedState(props.id));
  const [list, setList] = useRecoilState(listState);

  const toggleComplete = () => setIsCompleted(prevState => !prevState);

  const deleteTodo = () => {
    const newList = [...list.slice(0, props.id-1), ...list.slice(props.id)];
    setList(newList);
  };

  const completedStyle = {
    textDecoration: "line-through"
  }

  return (
    <div className="todo-element">
      <div>
        <div className="dot"></div>
        <p style={isCompleted ? completedStyle : null}>{props.text}</p>
      </div>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={toggleComplete} />
        <button className="delete" onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
