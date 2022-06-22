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

function RandomUsernames() {
  const [isClicked, setIsClicked] = useState(false)
  const [users, setUsers] = useState([])

  const handleClick = async event => {
    setIsClicked(true)
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await response.json()
    setUsers(users)
  }

  return (
    <>
      <button onClick={handleClick}>Fetch Users</button>
      {
        //DisplayRandomUsers()
        isClicked && (
          users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )
        )
      }
    </>
  )
}

function App() {
  return (
    <div className="App">
      {
        //ListFontAwesome()
        //MyForm()
        RandomUsernames()
      }
     </div>

  )
}

export default App
