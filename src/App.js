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

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = ({ target }) => {
    const name = target.name
    const value = target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

function App() {
  return (
    <div className="App">
      {
        //ListFontAwesome()
        MyForm()

      }
     </div>

  )
}

export default App
