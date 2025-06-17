import React from 'react'
import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import './style.css'

const Todolist = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        if (text.trim() !== '') {
            const newTask = {
                id: Math.ceil(Math.random() * 100),
                text: text
            };
            setTasks((prevTasks) => [...prevTasks, newTask])
        }
        else {
            alert('Задача пуста !')
        }
    }
    return (
        <div className='todolist'>
            <h1>Todolist</h1>
            <TaskInput onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    )
}

export default Todolist