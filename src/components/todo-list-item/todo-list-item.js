import React from 'react'

import './todo-list-item.css'

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    labelClasses: 'todo-list-item-label'
  }
  
  onLabelClick = () => {
    if (this.state.done) {
      this.setState({
        done: false,
        labelClasses: 'todo-list-item-label'
      })
    } else {
      this.setState({
        done: true,
        labelClasses: this.state.labelClasses += ' done'
      })
    }
  }

  render () {
    const { label, important = false } = this.props

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }

    return (
      <span className='todo-list-item'>
        <span
          className={this.state.labelClasses}
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type='button'
          className='btn btn-outline-success btn-sm float-right'
        >
          <i className='fa fa-exclamation' />
        </button>

        <button
          type='button'
          className='btn btn-outline-danger btn-sm float-right'
        >
          <i className='fa fa-trash-o' />
        </button>
      </span>
    )
  }
}
