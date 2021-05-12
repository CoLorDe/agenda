import React from "react";
import { RecoilRoot } from 'recoil';

import './App.css';
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";


function App() {
  return (
    <div>
      <div className="header">
        <h1>ToDo App</h1>
      </div>
      <div>
        <RecoilRoot>
          <div className="main">
            <div className="sidebar">
              <AddToDo />
            </div>
            <div className="list">
              <ToDoList />
            </div>
          </div>
        </RecoilRoot>
      </div>
    </div>
  );
};

export default App;
