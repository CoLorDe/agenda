import { atom, atomFamily } from "recoil";

import todosData from "./data/todosData"

export const listState = atom({
  key: 'listState',
  default: todosData,
});

export const completedState = atomFamily({
  key: "toDoCompletedState",
  default: false,
})
