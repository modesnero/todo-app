import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddItemPanel from '../add-item-panel'

import './app.css'

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', id: 1, important: false, done: false },
      { label: 'Make Awesome App', id: 2, important: false, done: false },
      { label: 'Have a lunch', id: 3, important: false, done: false }
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id)
      const newTodoData = todoData.slice()
      newTodoData.splice(index, 1)
      return { todoData: newTodoData }
    })
  }

  addItem = (label) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.slice()
      newTodoData.push({ label, id: this.length + 1 })
      return { todoData: newTodoData }
    })
  }

  render() {
    const { todoData } = this.state
    return (
      <div className='todo-app'>
        <AppHeader toDo={1} done={3} />
        <ItemStatusFilter />
        <SearchPanel />
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
        />
        <AddItemPanel addItem={this.addItem}/>
      </div>
    )
  }
}
