import { useState } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { TodoType } from '../types/Types'

type FilterType = 'all' | 'active' | 'completed'

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredTodos = todos.filter((todo: TodoType) => {
    switch (filter) {
      case 'active':
        return !todo.completed
      case 'completed':
        return todo.completed
      default:
        return true
    }
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="todo-list-container">
      {todos.length > 0 && (
        <div className="todo-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tümü ({todos.length})
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Aktif ({activeCount})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Tamamlanan ({completedCount})
          </button>
        </div>
      )}

      <div className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo: TodoType) => (
            <Todo key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="empty-state">
            {filter === 'all' && 'Henüz todo eklenmemiş. Yukarıdan yeni bir todo oluşturun!'}
            {filter === 'active' && 'Aktif todo bulunmuyor.'}
            {filter === 'completed' && 'Tamamlanan todo bulunmuyor.'}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList
