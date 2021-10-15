import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
// use .map to render list of categories and task using key prop
// function renderTask(props) {
// const TASKS = props.TASKS
// const ListTask = TASKS.map(task => task)
// console.log(ListTask)
// }

// const ListCategory = CATEGORIES.map((categorie)=> categorie)
//     console.log(ListCategory)

function App() {
const [ tasks, setTasks]= useState(TASKS)
const[categories,setCategories] = useState("All")
function addTask(task) {

}
function handleDeleteTask(task) {
const deleteTask = TASKS.filter(task => task.id != id)
}

    //console.log(CATEGORIES.map(category => category))
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  Category={CATEGORIES} selectedCategory={categories} setCategories={setCategories}/>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
