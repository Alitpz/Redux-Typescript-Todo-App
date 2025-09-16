import React from 'react'

function TodoCreate() {
  return (
    <div className='todo-create'>
      <input placeholder='Not Giriniz!' className='todo-input' type="text" />
      <button className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate
