import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ALL_AUTHORS from '../gqlqueries/ALL_AUTHORS'
import EDIT_AUTHOR from '../gqlqueries/EDIT_AUTHOR'

const EditAuthors = ({ submitHandler, authors, ourToken }) => {

  if(!ourToken) return null

  return(
  <div>
    <h2>Set Birthday</h2>
    <form onSubmit={submitHandler}>
      <select name='selectSlide'>
      {
        authors.map(a=> <option value={a} key={a}>{a}</option>)
      }
      </select>
      <div>
        Born: 
        <input type='text' name='born'/>
      </div>
      <button type='submit'>update author</button>
    </form>
  </div>
  )
}

const Authors = ({ show, token }) => {
  const {data} = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(EDIT_AUTHOR)

  if (!show) {
    return null
  }

  const submitHandler = event => {
    event.preventDefault()

    const name = event.target.selectSlide.value
    const setToBorn = Number(event.target.born.value)

    editAuthor({
      variables: {
        name,
        setToBorn
      }
    })

    event.target.born.value = ''
  }

  const authors =
  data
  ? data.allAuthors
  : []

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <EditAuthors 
        submitHandler={submitHandler} 
        authors={authors.map(a=> a.name)}
        ourToken={token}
      />
    </div>
  )
}

export default Authors