import React from 'react'
import { TaskRow } from './TaskRow'

export const TaskTable = ({ tasks, toggleTask, showCompleted=false }) => {

    const taskTableRows = (doneValue) =>{

        return(
            tasks.filter(task => task.done === showCompleted)
                 .map(task => (
                <TaskRow task={task} toggleTask={toggleTask}></TaskRow>
            ))
        )
    }

    return (
        <table className='table table-dark table-striped table-bordered table-dark border-secondary'>
            <thead>
                <tr className='table-primary'>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
    )
}
