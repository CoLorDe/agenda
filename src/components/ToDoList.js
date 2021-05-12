import React from "react";
import { useRecoilValue } from "recoil";

import { listState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const toDoList = useRecoilValue(listState);

  return (
    <div>
      {toDoList.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default ToDoList;
