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
    ],
    totalItems: 3,
    doneItems: 0
  }

  calculatingItems = () => {
    this.setState(({ todoData, totalItems, doneItems }) => {
      let newTotalItems = 0
      let newDoneItems = 0
      todoData.forEach((item, i, arr) => {
        newTotalItems++
        if (item.done) newDoneItems++
      })
      return { totalItems: newTotalItems, doneItems: newDoneItems }
    })
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id)
      const newTodoData = todoData.slice()
      newTodoData.splice(index, 1)
      return { todoData: newTodoData }
    })
    this.calculatingItems()
  }

  addItem = label => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.slice()
      newTodoData.push({
        label,
        id: todoData.length + 1,
        important: false,
        done: false
      })
      return { todoData: newTodoData }
    })
    this.calculatingItems()
  }

  onDoneToggle = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id)
      const newTodoData = todoData.slice()
      newTodoData[index].done = !newTodoData[index].done
      return { todoData: newTodoData }
    })
    this.calculatingItems()
  }

  onImportantToggle = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id)
      const newTodoData = todoData.slice()
      newTodoData[index].important = !newTodoData[index].important
      return { todoData: newTodoData }
    })
    this.calculatingItems()
  }

  render () {
    const { todoData, totalItems, doneItems } = this.state
    return (
      <div className='todo-app'>
        <AppHeader toDo={totalItems - doneItems} done={doneItems} />
        <ItemStatusFilter />
        <SearchPanel />
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onImportantToggle={this.onImportantToggle}
          onDoneToggle={this.onDoneToggle}
        />
        <AddItemPanel addItem={this.addItem} />
      </div>
    )
  }
}
