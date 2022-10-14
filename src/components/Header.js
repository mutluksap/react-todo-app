import React, {useState} from 'react'

function Header({filterTodo}) {
  const [value, setValue] = useState(undefined)

  const handleChange = (value) => {
    filterTodo(value)
    setValue(value)
  }

  return (
    <header>
        <h1>todo list app</h1>
        <input onChange={(e) => handleChange(e.target.value)} value={value} type='text' placeholder='Bir todo filtreleyin...'/>
    </header>
  )
}

export default Header