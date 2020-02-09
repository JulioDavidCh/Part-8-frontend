import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ALL_BOOKS from '../gqlqueries/ALL_BOOKS'

const Books = (props) => {
  const {data} = useQuery(ALL_BOOKS)

  if (!props.show) {
    return null
  }

  const books =
  data
  ? data.allBooks
  : []

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {books.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Books