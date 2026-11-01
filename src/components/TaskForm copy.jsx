import { useEffect, useState } from "react"

function TaskForm(props) {
    const { addTask, editedTask, updateTask } = props
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [dateTime, setDateTime] = useState("")
    useEffect(() => {
        if (editedTask !== null) {
            setTaskName(editedTask.taskName)
            setDescription(editedTask.description)
            setDateTime(editedTask.dateTime)
        }
    }, [editedTask])
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

        if (editedTask !== null) {
            const updatedValues = {
                id: editedTask.id,
                taskName,
                description,
                dateTime,
                completed: editedTask.completed
            }
            updateTask(updatedValues)
        } else {

            addTask(newTask)
        }
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