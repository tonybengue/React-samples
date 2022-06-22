import { useState, useEffect } from 'react'
import './App.css'

function ListFontAwesome() {
  const MenuClasses = [
    'fas fa-home',
    'fas fa-calendar-alt',
    'fas fa-clock'
  ]

  const LiComponent = ({ cls, children }) => <li className={cls}>{children}</li>

  return (
    <ul>
      {
        MenuClasses.map((classAttribute, idx) => <LiComponent cls={classAttribute} key={idx}></LiComponent>)
      }
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      {
        ListFontAwesome()
      }
     </div>

  )
}

export default App
