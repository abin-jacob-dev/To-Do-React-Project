import { useState } from "react"
import Header from "./components/Header.jsx"
import TaskForm from "./components/TaskForm.jsx"
import TaskList from "./components/TaskList.jsx"

function App() {
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditedTask] = useState(null)
  const [deadlineToast, setDeadlineToast] = useState(false)
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
  const toggleComplete = (id) => {
    setTasks((prevState) => prevState.map(task => task.id === id ? { ...task, completed: !task.completed } : task))

  }
  const showDeadline = () => {
    setDeadlineToast(true)
    setTimeout(() => {
      setDeadlineToast(false)
    }, 5000);
  }
  return (
    <div>
      <Header />
      {deadlineToast && <p>A task deadline has passed</p>}
      <TaskForm editedTask={editedTask} addTask={addTask} updateTask
        ={updateTask} />
      <TaskList showDeadline={showDeadline} toggleComplete={toggleComplete} deleteTask={deleteTask} tasks={tasks} editTask={editTask} />
    </div>
  )
}
export default App
