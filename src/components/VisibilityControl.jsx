import React from 'react'

export const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked }) => {

    const handleDelete = () => {
        if (window.confirm('Are yu sure yu want to delete it?')) {
            cleanTasks()
        }
    }
    return (
        <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
            <div className='form-check form-switch'>
                <input type='checkbox'
                    className='form-check-input'
                    checked={isChecked}
                    onChange={e => setShowCompleted(e.target.checked)}></input>
                <label htmlFor='form-check-label' >Show Tasks Done</label>
            </div>
            <button className='btn btn-danger btn-sm'
                onClick={handleDelete}>
                Clear
            </button>
        </div>
    )
}
