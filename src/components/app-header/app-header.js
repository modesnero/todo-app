import React from 'react'
import './app-header.css'

const AppHeader = ({ toDo, done }) => {
  return (
    <div className='app-header mb-2'>
      <h1 className="text-center">Список дел</h1>
      <h2 className="text-center">
        {toDo} осталось, {done} сделано
      </h2>
    </div>
  )
}

export default AppHeader
