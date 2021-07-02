import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
//import PropTypes from 'prop-types'

const App = () => {
  // App-level state
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Go to grocery store'
      },
      {
          id: 2,
          text: 'Have lunch with friends'
      },
      {
          id: 3,
          text: 'Go to meeting'
      }
    ])

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title={ 'Task Tracker' }/>
      {tasks.length != 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} /> 
        : 'No tasks' }
    </div>
  );
}

export default App;
