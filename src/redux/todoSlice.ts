import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'

const initialState: TodoInitialState = {
    todos: JSON.parse(localStorage.getItem('todos') || '[]')
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<Omit<TodoType, 'completed' | 'createdAt'>>) => {
            const newTodo: TodoType = {
                ...action.payload,
                completed: false,
                createdAt: new Date()
            }
            state.todos = [...state.todos, newTodo]
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodo: (state: TodoInitialState, action: PayloadAction<{ id: number, content: string }>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.content = action.payload.content
            }
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        toggleTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }

})


export const { createTodo, deleteTodo, updateTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer