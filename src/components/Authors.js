import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ALL_AUTHORS from '../gqlqueries/ALL_AUTHORS'
import EDIT_AUTHOR from '../gqlqueries/EDIT_AUTHOR'

const EditAuthors = ({ submitHandler }) => {

  return(
  <div>
    <h2>Set Birthday</h2>
    <form onSubmit={submitHandler}>
      <div>
        Name: 
        <input type='text' name='name'/>
      </div>
      <div>
        Born: 
        <input type='text' name='born'/>
      </div>
      <button type='submit'>update author</button>
    </form>
  </div>
  )
}

const Authors = (props) => {
  const {data} = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(EDIT_AUTHOR)

  if (!props.show) {
    return null
  }

  const submitHandler = event => {
    event.preventDefault()

    const name = event.target.name.value
    const setToBorn = Number(event.target.born.value)

    editAuthor({
      variables: {
        name,
        setToBorn
      }
    })

    console.log({name, setToBorn})

    event.target.name.value = ''
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
      <EditAuthors submitHandler={submitHandler} />
    </div>
  )
}

export default Authors