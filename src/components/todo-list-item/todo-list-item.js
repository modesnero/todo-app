import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  render () {
    const { done, important, label, onDeleted } = this.props
    const { onImportantToggle, onDoneToggle } = this.props

    let labelClasses = 'todo-list-item'
    if (done) labelClasses += ' done'
    if (important) labelClasses += ' important'

    return (
      <span className={labelClasses}>
        <span
          className='todo-list-item-label'
          onClick={onDoneToggle}
        >
          {label}
        </span>

        <button
          type='button'
          className='btn btn-outline-danger btn-sm float-right'
          onClick={onDeleted}
        >
          <i className='fa fa-trash-o' />
        </button>

        <button
          type='button'
          className='btn btn-outline-success btn-sm float-right'
          onClick={onImportantToggle}
        >
          <i className='fa fa-exclamation' />
        </button>
      </span>
    )
  }
}
