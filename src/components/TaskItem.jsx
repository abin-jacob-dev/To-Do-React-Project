function TaskItem({ item, deleteTask }) {

    return (
        <div>
            <div>
                <p >Task ID : {item.id}</p>
                <p >Task Name : {item.taskName}</p>
                <p >Description : {item.description}</p>
                <p >Deadline : {item.dateTime}</p>
                <p >Completion status : {item.completed ? 'Completed' : 'Pending'}</p>
                <button onClick={()=>deleteTask(item.id)} type="submit">Delete</button>
                <p>---------------------------------------</p>
            </div>

        </div>
    )
}

export default TaskItem