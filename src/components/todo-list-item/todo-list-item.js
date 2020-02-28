import React from 'react'

import './todo-list-item.css'

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
    ...this.props
  }

  onLabelClick = () => {
    this.setState(({ done }) => ({ done: !done }))
  }

  onImportantClick = () => {
    this.setState(({ important }) => ({ important: !important }))
  }

  render() {
    const { done, important, label, onDeleted } = this.state

    let labelClasses = 'todo-list-item'
    if (done) labelClasses += ' done'
    if (important) labelClasses += ' important'

    return (
      <span className={labelClasses}>
        <span className='todo-list-item-label' onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type='button'
          className='btn btn-outline-success btn-sm float-right'
          onClick={this.onImportantClick}
        >
          <i className='fa fa-exclamation' />
        </button>

        <button
          type='button'
          className='btn btn-outline-danger btn-sm float-right'
          onClick={onDeleted}
        >
          <i className='fa fa-trash-o' />
        </button>
      </span>
    )
  }
}
