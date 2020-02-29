import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddItemPanel from '../add-item-panel'

import './app.css'

export default class App extends Component {
  state = {
    todoData: [],
    totalItems: 0,
    doneItems: 0,
    itemCount: 0,
    filterStatus: 0,
    searchStatus: ''
  }

  onChangeSearch = value => {
    this.setState({ searchStatus: value })
  }

  onChangeFilterStatus = newStatus => {
    this.setState({ filterStatus: newStatus })
  }

  calculatingItems = () => {
    this.setState(({ todoData }) => {
      let newTotalItems = 0
      let newDoneItems = 0
      todoData.forEach(item => {
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
    this.setState(({ todoData, itemCount }) => {
      const newTodoData = todoData.slice()
      newTodoData.push({
        label,
        id: itemCount + 1,
        important: false,
        done: false
      })
      return { todoData: newTodoData, itemCount: itemCount + 1 }
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
    const {
      todoData,
      totalItems,
      doneItems,
      filterStatus,
      searchStatus
    } = this.state
    return (
      <div className='todo-app'>
        <AppHeader toDo={totalItems - doneItems} done={doneItems} />
        <ItemStatusFilter
          onChangeFilterStatus={this.onChangeFilterStatus}
          filterStatus={filterStatus}
        />
        <SearchPanel onChangeSearch={this.onChangeSearch} />
        <TodoList
          searchStatus={searchStatus}
          filterStatus={filterStatus}
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
