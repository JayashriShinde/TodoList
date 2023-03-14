import React , {useState, useEffect} from 'react';
import Header from './compnents/Header';
import Form from "./compnents/Form"; 

import Tlist from './compnents/Tlist';
import './App.css';

const App = ()=> {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([initialState]);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.getItem("todos", JSON.stringify(todos));
  },[todos]
  );
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          < Header />
          </div>
          <div>
            < Form 
            input={input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodos = {editTodo}
            setEditTodo = {setEditTodo}
            />
          </div>
          <div>
          <Tlist 
          todos={todos} 
          setTodos ={setTodos}
          setEditTodo = {setEditTodo}
          />
          </div>
      </div>
    </div>
  );
};

export default App;
