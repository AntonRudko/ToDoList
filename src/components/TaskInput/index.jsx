import React from 'react'

const TaskInput = ({ onAddTask }) => {


    const onFinish = (e) => {
        e.preventDefault();

        const input = e.target.label;
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.label)
        // console.log('----------')
        // console.dir(input)
        const inputValue = input.value;
        onAddTask(inputValue);
        input.value = '';
        // console.log(inputValue)

    };



    return (
        <form onSubmit={onFinish}>
            <input type="text" name='label' />
            <button type="submit"> Створити </button>
        </form>
    )
}

export default TaskInput