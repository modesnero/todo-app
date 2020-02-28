import React, { Component } from 'react'

export default class AddItemPanel extends Component {

  state = { inputVal: '', ...this.props }

  inputHandler = (event) => {
    this.setState({ inputVal: event.target.value })
  }

  render() {
    const { addItem, inputVal } = this.state
    return (
      <div className="mt-3 mb-5">
        <button
          className="btn btn-block btn-primary"
          onClick={() => addItem(inputVal)}
        >
          Add Item
        </button>
        <input
          type="text"
          onChange={this.inputHandler}
          className="form-control mt-3"
          placeholder="Enter task label" />
      </div>
    )
  }
}
