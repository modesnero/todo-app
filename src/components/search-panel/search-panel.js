import React, { Component } from 'react'

import './search-panel.css'

export default class SearchPanel extends Component {
  searchChanged = event => {
    this.props.onChangeSearch(event.target.value)
  }

  render() {
    return (
      <input
        onChange={this.searchChanged}
        type='text'
        className='form-control search-input mb-2'
        placeholder='Поиск задач'
      />
    )
  }
}
