import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';
import type { TodoType } from '../types/Types';

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTodo = async () => {
    if (newTodo.trim().length === 0) {
      alert('Lütfen bir todo giriniz!');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const payload: Omit<TodoType, 'completed' | 'createdAt'> = {
      id: Math.floor(Math.random() * 10000) + Date.now(), // Better ID generation
      content: newTodo.trim(),
    }

    dispatch(createTodo(payload));
    setNewTodo('');
    setIsLoading(false);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleCreateTodo();
    }
  }

  return (
    <div className='todo-create'>
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder='Yeni todo giriniz...'
        className='todo-input'
        type="text"
        disabled={isLoading}
      />
      <button
        onClick={handleCreateTodo}
        className='todo-create-button'
        disabled={isLoading || newTodo.trim().length === 0}
      >
        {isLoading ? 'Oluşturuluyor...' : 'Oluştur'}
      </button>
    </div>
  )
}

export default TodoCreate
