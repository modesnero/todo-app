import React from 'react'
import './app-header.css'

const AppHeader = ({ toDo, done }) => {
  return (
    <div className='app-header d-flex mb-2'>
      <h1>Список дел</h1>
      <h2>
        {toDo} осталось, {done} сделано
      </h2>
    </div>
  )
}

export default AppHeader
