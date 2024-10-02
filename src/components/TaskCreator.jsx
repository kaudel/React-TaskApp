import React, { useEffect } from 'react'
import { useState } from 'react'

export const TaskCreator = ({createNewTask}) => {
    
    const [newTaskName, setNewTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        //localStorage.setItem('task', newTaskName)
        setNewTaskName('')
    }


    return (
            <form onSubmit={handleSubmit} className='my-2 row' >
                <div className='col-9'>
                <input type='text'
                    className='form-control'
                    placeholder='Add a new task'
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}></input>
                </div>
                <div className='col-3 p-0 d-flex align-items-center'>
                <button >Save Task</button>
                </div>
            </form>
    )
}
