import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} 
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}    
                />
            </h3>
            <p>Date: Fev 5th at 3 PM</p>
        </div>
    )
}

export default Task