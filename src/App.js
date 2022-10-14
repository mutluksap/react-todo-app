import './App.css';
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');

  async function fetchData(){
    const response = await axios.get('https://react-todo-list-panel.netlify.app/api')
    setTodos(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = (todo) => {
    if(todo !== "") {
      setTodos([...todos, {"id": todos.length + 1, "name": todo}]);
    }
  }

  const filterTodo = (value) => {
    setFilter(value.toString().toLowerCase())
  }

  const deleteItem = (item) => {
    const deletedItemFilter = todos.filter(todo =>todo.id !== item.id);
    setTodos(deletedItemFilter);
  }

  return (
    <div className="container">
      {todos.length ?
      <>
        <Header filterTodo={filterTodo}/>
        <Todos setTodos={setTodos} deleteItem={deleteItem} todos={todos} filter={filter}/>
        <Footer addTodo={addTodo}/>
      </>
         : <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
