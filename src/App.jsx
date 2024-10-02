
import { useEffect, useState } from 'react';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map(t => (t.name == task.name) ? { ...t, done: !t.done } : t)
    )
  }

  const cleanTasks = () => {
    setTaskItems(
      taskItems.filter(task => !task.done)
    )
    setShowCompleted(false)
  }

  // su no se agrega nada en el arrlego, se ejecutara apenas la app cargue
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  // Este hook reacciona cada que un dato cambia
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems])

  return (
    <main className='bg-dark vh-100 text-white'>
        <Container>
        <TaskCreator createNewTask={createNewTask}></TaskCreator>
        <TaskTable tasks={taskItems} toggleTask={toggleTask} ></TaskTable>
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks} />
        {
          showCompleted === true && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} ></TaskTable>
          )}
      </Container>
    </main>
  )
}

export default App
