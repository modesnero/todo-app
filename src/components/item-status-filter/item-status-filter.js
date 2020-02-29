import React, { Component } from 'react'

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
  render() {
    const { onChangeFilterStatus, filterStatus } = this.props
    const classArr = []
    for (let i = 0; i < 3; i++) {
      if (filterStatus === i) {
        classArr.push('btn btn-primary')
      } else {
        classArr.push('btn btn-outline-primary')
      }
    }
    return (
      <div className='btn-group d-flex mb-2'>
        <button
          type='button'
          className={classArr[0]}
          onClick={() => onChangeFilterStatus(0)}
        >
          Все
        </button>
        <button
          type='button'
          className={classArr[1]}
          onClick={() => onChangeFilterStatus(1)}
        >
          Активные
        </button>
        <button
          type='button'
          className={classArr[2]}
          onClick={() => onChangeFilterStatus(2)}
        >
          Выполненные
        </button>
      </div>
    )
  }
}
