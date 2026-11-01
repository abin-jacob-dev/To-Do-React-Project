import { useEffect, useRef, useState } from "react"

function TaskItem({ item, deleteTask, editTask, toggleComplete, showDeadline }) {
    const deadline = new Date(item.dateTime)
    const [currentTime, setCurrentTime] = useState(new Date())
    const isDeadlinePassed = deadline < currentTime
    const toastFunction = () => {
        if (isDeadlinePassed && !item.completed && !showToast.current) {
            showDeadline()
            showToast.current = true
        }
    }
    const showToast = useRef(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
            toastFunction()
        }, 1000);
        return () => clearInterval(interval)
    }, [isDeadlinePassed, item.completed])
    return (
        <div>
            <div>
                <p >Task ID : {item.id}</p>
                <p >Task Name : {item.taskName}</p>
                <p >Description : {item.description}</p>
                <p >Deadline : {item.dateTime}</p>
                <p >Completion status : {item.completed ? 'Completed' : 'Pending'}</p>
                <p>Deadline : {isDeadlinePassed ? "Deadline Passed" : "In Progress"}</p>
                <button onClick={() => toggleComplete(item.id)}  >{item.completed ? "Mark Pending" : "Mark Complete"}</button>
                <button onClick={() => deleteTask(item.id)}>Delete</button>
                <button onClick={() => editTask(item.id)}>Edit</button>
                <p>---------------------------------------</p>
            </div>

        </div>
    )
}

export default TaskItem