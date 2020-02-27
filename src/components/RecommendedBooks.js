import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ALL_BOOKS from '../gqlqueries/ALL_BOOKS'
import LOGGED_INFO from '../gqlqueries/LOGGED_INFO'

const BookList = ({genre}) => {
  const {data: books} = useQuery(ALL_BOOKS, {
    variables: {genre}
  })

  if(!books) return null

  console.log(books.allBooks)

  return(
    <div>
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
          {books.allBooks.map(a =>
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

const RecommendedBooks = ({show}) => {
  const {data: userInfo} = useQuery(LOGGED_INFO)

  // const booksToShow = (books && userInfo)
  // ? books.allBooks.filter(book => book.genres.indexOf(userInfo.me.favoriteGenre) > -1)
  // : null


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
      { 
        userInfo
        ? <BookList genre={userInfo.me.favoriteGenre} />
        : null
      }
    </div>
  )
}

export default RecommendedBooks