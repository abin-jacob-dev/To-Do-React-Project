
import TaskItem from "./TaskItem"

function TaskList(props) {
    const { tasks, deleteTask, editTask } = props
    return (
        <div>
            {tasks.map(item => (
                < TaskItem key={item.id} item={item} deleteTask={deleteTask} editTask={editTask} />
            ))}
        </div>
    )
}

export default TaskList
