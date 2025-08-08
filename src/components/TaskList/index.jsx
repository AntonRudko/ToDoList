import React from 'react'
import Card from '../Card'

const TaskList = ({ tasks }) => {
	return (
		<ul>
			{tasks.length === 0 ? (
				<div>У вас немає завдань</div>
			) : (
				tasks?.map(task => <Card key={task.id} taska={task.text} />)
			)}
		</ul>
	)
}

export default TaskList
