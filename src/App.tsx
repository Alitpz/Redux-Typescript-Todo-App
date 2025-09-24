import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📝 Todo Uygulaması</h1>
        <p>Görevlerinizi organize edin ve takip edin</p>
      </header>
      <main className="app-main">
        <TodoCreate />
        <TodoList />
      </main>
    </div>
  )
}

export default App
