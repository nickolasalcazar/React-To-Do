import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import PropTypes from 'prop-types'

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

  return (
    <div className='container'>
      <Header title={ 'Task Tracker' }/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
