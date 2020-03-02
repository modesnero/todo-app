import React, { Component } from 'react'

export default class AddItemPanel extends Component {
  state = { inputVal: '' }

  inputHandler = event => {
    this.setState({ inputVal: event.target.value })
  }

  onSubmit = () => {
    const { inputVal } = this.state
    this.props.addItem(inputVal)
    this.setState({ inputVal: '' })
  }

  render () {
    const { inputVal } = this.state
    return (
      <form className='mb-5' onSubmit={this.onSubmit}>
        <input
          id='addInput'
          type='text'
          value={inputVal}
          onChange={this.inputHandler}
          className='form-control mt-2'
          placeholder='Новая задача'
        />
        <button className='btn btn-block btn-primary mt-2'>
          Добавить задачу
        </button>
      </form>
    )
  }
}
