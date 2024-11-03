import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import './App.css'

function App() {

  return (
    <>
        <h1 className="text-3xl font-bold underline bg-gray-400">Hello world!</h1>
        <AddTodo />
        <Todos />
    </>
  )
}

export default App
