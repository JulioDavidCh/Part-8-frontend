import React,{useState} from 'react'
import { useQuery } from '@apollo/react-hooks'
import ALL_BOOKS from '../gqlqueries/ALL_BOOKS'

const Books = (props) => {
  const {data} = useQuery(ALL_BOOKS)
  const [currentGenre, setcurrentGenre] = useState('all')

  const books =
  data
  ? data.allBooks
  : []

  const booksToShow =
  currentGenre === 'all'
  ? books
  : books.filter(book => book.genres.indexOf(currentGenre) > -1)

  let allGenres = data 
  ? data.allBooks.flatMap(book => book.genres)
  : null

  let differentGenres = allGenres
  ? [...new Set(allGenres)]
  : null

  if (!props.show) {
    return null
  }

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
          {booksToShow.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {
          differentGenres.map(genre => 
          <button key={genre} onClick={() => setcurrentGenre(genre)}>
            {genre}
          </button>)
        }
      </div>
    </div>
  )
}

export default Books