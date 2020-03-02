import React, { Component } from 'react'

export default class AddItemPanel extends Component {
  state = { inputVal: '' }

  inputHandler = event => {
    this.setState({ inputVal: event.target.value })
  }

  addItemHandler = () => {
    const { inputVal } = this.state
    this.props.addItem(inputVal)
    this.setState({ inputVal: '' })
  }

  render () {
    const { inputVal } = this.state
    return (
      <div className='mb-5'>
        <input
          id='addInput'
          type='text'
          value={inputVal}
          onChange={this.inputHandler}
          className='form-control mt-2'
          placeholder='Новая задача'
        />
        <button
          className='btn btn-block btn-primary mt-2'
          onClick={this.addItemHandler}
        >
          Добавить задачу
        </button>
      </div>
    )
  }
}
