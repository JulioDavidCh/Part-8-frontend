import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import LOGIN from '../gqlqueries/LOGIN'

const Login = ({ show, setOurPage, setOurToken }) => {
  const [login] = useMutation(LOGIN)

  const submitHandler = async (event) => {
    event.preventDefault()
    const username = event.target.usernameField.value
    const password = event.target.passwordField.value

    event.target.usernameField.value = ''
    event.target.passwordField.value = ''

    const queryResult = await login({
      variables: {
        username,
        password
      }
    })

    let token = queryResult.data.login ? queryResult.data.login.value : null

    console.log(token)

    localStorage.setItem('loggedUser', token)

    setOurToken(token)

    if(token) setOurPage('authors')
  }

  if(!show) return null

  return (
    <div>
      <h2>
        Login
      </h2>
      <form onSubmit={submitHandler}>
        <div>Username:
          <input type='text' name='usernameField' />
        </div>
        <div>Password:
          <input type='password' name='passwordField' />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login