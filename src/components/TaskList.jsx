import './TaskList.css'
import TaskItem from "./TaskItem"

function TaskList(props) {
    const { tasks, deleteTask, editTask, toggleComplete, showDeadline } = props
  
    return (

        
        <div className="task-list">
            {
                tasks.map(item => (
                    < TaskItem showDeadline={showDeadline} toggleComplete={toggleComplete} key={item.id} item={item} deleteTask={deleteTask} editTask={editTask} />
                ))
            }
        </div >
    )
}

export default TaskList
