import React, {useState} from 'react'

function Todo({todo, deleteItem, setTodos, todos}) {
  const [isDisabled, setIsDisabled] = useState(true)
  const [nameVal, setNameVal] = useState(todo.name)
  return (
    <div className='todo'>
        <input disabled={isDisabled} value={nameVal} onChange={(e) => setNameVal(e.target.value)}/>
        <div className='icons'>
            <i onClick={() => {
              if(!isDisabled) {
                  setTodos(todos.map((t) => {
                    if(t.id === todo.id) {
                      todo.name = nameVal
                      return todo
                    }
                    else {
                      return t
                    }
                  }))
              }
              setIsDisabled(!isDisabled)
            }} className="fa-solid fa-floppy-disk"></i>
            <i onClick={e => deleteItem(todo)} className="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

export default Todo