// import logo from './logo.svg';
import React from "react";
import TodoList from "./Checkbox";
import todosData from "./todosData";
import "./App.css";

// function App() {
//   const list = todosData.map((elt) => {
//     return <TodoList key={elt.id} task={elt.text} elt={elt} />;
//   });

//   return <div className="todo-list">{list}</div>;
// }

class App extends React.Component {
  render(){
    const list = todosData.map((elt) => {
          return <TodoList key={elt.id} task={elt.text} elt={elt} />;
        });
      
        return <div className="todo-list">{list}</div>;
  }
}

export default App;
