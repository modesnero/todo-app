import React, { Component } from 'react'

export default class AddItemPanel extends Component {
  state = { inputVal: '', ...this.props }

  inputHandler = event => {
    this.setState({ inputVal: event.target.value })
  }

  render () {
    const { addItem, inputVal } = this.state
    return (
      <div className='mb-5'>
        <input
          id='addInput'
          type='text'
          value={this.inputVal}
          onChange={this.inputHandler}
          className='form-control mt-2'
          placeholder='Введите название задачи'
        />
        <button
          className='btn btn-block btn-primary mt-2'
          onClick={event => {
            this.setState({ inputVal: '' })
            addItem(inputVal)
          }}
        >
          Добавить задачу
        </button>
      </div>
    )
  }
}
