import { useState } from "react"
import Header from "./components/Header.jsx"
import TaskForm from "./components/TaskForm.jsx"
import TaskList from "./components/TaskList.jsx"

function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (newTask) => {
    setTasks(prevTask => ([...prevTask, newTask]))
  }

  const deleteTask = (id) => {
    console.log(id);
    setTasks(prevTasks => prevTasks.filter(task =>(task.id!==id)))
  }
  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList deleteTask={deleteTask} tasks={tasks} />
    </div>
  )
}

export default App
