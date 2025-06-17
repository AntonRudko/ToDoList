import React from 'react'
import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import './style.css'


export const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    return (
        <div className='todolist'>
            <h1>Todolist</h1>
            <TaskInput setTasks={setTasks} />
            <TaskList tasks={tasks} />
        </div>
    )
}
