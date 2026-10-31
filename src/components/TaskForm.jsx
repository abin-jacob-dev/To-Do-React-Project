import { useState } from "react"

function TaskForm(props) {
    const { addTask } = props
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [dateTime, setDateTime] = useState("")
    const handleTaskName = (e) => {
        const taskName = e.target.value
        setTaskName(taskName)
        console.log(taskName);
    }
    const handleTaskDescription = (e) => {
        const taskDescription = e.target.value
        setDescription(taskDescription)
        console.log(description);
    }
    const handleDateTime = (e) => {
        const dateTime = e.target.value
        setDateTime(dateTime)
        console.log(dateTime);

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: Date.now(),
            taskName,
            description,
            dateTime,
            completed: false
        }
        addTask(newTask)
        setTaskName('')
        setDescription('')
        setDateTime('')
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleTaskName} required value={taskName} placeholder="Task Name" type="text" />
            <textarea onChange={handleTaskDescription} value={description} placeholder="Task Description"></textarea>
            <input onChange={handleDateTime} required value={dateTime} type="datetime-local" />
            {/* <input type="checkbox" checked={task.completed} /> */}
            <button type="submit" >Add Task</button>
        </form >
    )
}
export default TaskForm