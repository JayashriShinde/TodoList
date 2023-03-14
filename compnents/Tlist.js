import React from 'react';

const Tlist = ({ todos, setTodos, setEditTodo }) => {
  const handlerComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          // return { ...item, complete: !item.completed };
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handlerDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  

  return (
    <div>
      {todos.map((todo) => (

        <li className='list-item' key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className='button-complete task-button' onClick={() => handlerComplete(todo)}>Complete </button>

            <button className='buttom-edit task-button' onClick={() => handleEdit(todo)}>Edit</button>
            

            <button className='button-delete task-button' onClick={() => handlerDelete(todo)}>Delete</button>
          </div>
        </li>


      ))}
    </div>
  );
};

export default Tlist;

