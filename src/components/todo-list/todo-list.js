import React from 'react'

import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = props => {
  const {
    todos,
    onDeleted,
    onDoneToggle,
    onImportantToggle,
    filterStatus,
    searchStatus
  } = props

  // eslint-disable-next-line array-callback-return
  const elements = todos.map(item => {
    const { id, done, label } = item

    const isFilterParcing =
      filterStatus === 0 ||
      (filterStatus === 1 && !done) ||
      (filterStatus === 2 && done)

    const isSearchPassing = searchStatus === '' ||
      label.includes(searchStatus) ||
      label.toLowerCase().includes(searchStatus) ||
      label.toUpperCase().includes(searchStatus)

    if (isFilterParcing && isSearchPassing) {
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
