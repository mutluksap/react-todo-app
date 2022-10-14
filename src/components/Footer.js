import React from 'react'
import {useState} from 'react';

function Footer({addTodo}) {

    const [todo, setTodo] = useState(undefined);

    const  clickButtonTodo = todo => {
      addTodo(todo); 
      setTodo('');
    }
  return (
    <footer>
        <input onChange={e => setTodo(e.target.value)} name='add_todo' value={todo} placeholder='Bir todo ekleyin...'/>
        <button onClick={() => clickButtonTodo(todo)}>EKLE</button>
    </footer>
  )
}

export default Footer