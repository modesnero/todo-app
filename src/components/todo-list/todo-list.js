import React from 'react'

import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = props => {
  const {
    todos,
    onDeleted,
    onDoneToggle,
    onImportantToggle,
    filterStatus
  } = props
  // eslint-disable-next-line array-callback-return
  const elements = todos.map(item => {
    const { id, done } = item
    if (
      filterStatus === 0 ||
      (filterStatus === 1 && !done) ||
      (filterStatus === 2 && done)
    ) {
      return (
        <li key={id} className='list-group-item'>
          <TodoListItem
            {...item}
            onDeleted={() => onDeleted(id)}
            onImportantToggle={() => onImportantToggle(id)}
            onDoneToggle={() => onDoneToggle(id)}
          />
        </li>
      )
    }
  })

  return <ul className='list-group todo-list'>{elements}</ul>
}

export default TodoList
