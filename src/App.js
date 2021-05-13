import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import './App.css';
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";


function App() {
  return (
    <Router>
    <div>
      <div className="header">
        <h1>ToDo App</h1>
        <nav>
          <Link to="/agenda">Home</Link>
          <Link to="/agenda/crud">CRUD</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/agenda/">
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
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default App;
