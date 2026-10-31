
import TaskItem from "./TaskItem"

function TaskList(props) {
    const { tasks,deleteTask } = props
    return (
        <div>
            {tasks.map(item => (
                < TaskItem key={item.id} item={item} deleteTask={deleteTask} />
            ))}
        </div>
    )
}

export default TaskList
