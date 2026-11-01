import { useState } from "react"
import Header from "./components/Header.jsx"
import TaskForm from "./components/TaskForm.jsx"
import TaskList from "./components/TaskList.jsx"

function App() {
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditedTask] = useState(null)
  const addTask = (newTask) => {
    setTasks(prevTask => ([...prevTask, newTask]))
  }
  const editTask = (id) => {
    const editedTask = tasks.find(task => task.id === id)
    console.log(editedTask);
    setEditedTask(editedTask)
    console.log(id);

  }
  const updateTask = (updatedTask) => {
    console.log(updatedTask)
    setTasks(prevTasks => (prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)))
    setEditedTask(null)
  }
  const deleteTask = (id) => {
    console.log(id);
    setTasks(prevTasks => prevTasks.filter(task => (task.id !== id))
    )
  }
  return (
    <div>
      <Header />
      <TaskForm editedTask={editedTask} addTask={addTask} updateTask
        ={updateTask} />
      <TaskList deleteTask={deleteTask} tasks={tasks} editTask={editTask} />
    </div>
  )
}
export default App
