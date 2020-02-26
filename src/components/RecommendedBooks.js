import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ALL_BOOKS from '../gqlqueries/ALL_BOOKS'
import LOGGED_INFO from '../gqlqueries/LOGGED_INFO'

const RecommendedBooks = ({show}) => {
  const {data: books} = useQuery(ALL_BOOKS)
  const {data: userInfo} = useQuery(LOGGED_INFO)

  const booksToShow = (books && userInfo)
  ? books.allBooks.filter(book => book.genres.indexOf(userInfo.me.favoriteGenre) > -1)
  : null

  if(!show) return null

  return(
    <div>
      <h2>
        recommendations
      </h2>

      <p>
        books in your favorite genre 
        <b>
          {' ' + userInfo.me.favoriteGenre}
        </b>
      </p>

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
          {booksToShow.map(a =>
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

export default RecommendedBooks