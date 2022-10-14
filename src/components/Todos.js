import React from 'react'
import Todo from './Todo'

function Todos({todos, filter, deleteItem, setTodos}) {
  return (
    <main>
        {
            todos.filter(t => t.name.toLowerCase().includes(filter)).map((todo) => <Todo key={todo.id} deleteItem={deleteItem} setTodos={setTodos} todos={todos} todo={todo}/>)
        }
    </main>
  )
}

export default Todos