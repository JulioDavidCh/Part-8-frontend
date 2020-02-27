import gql from 'graphql-tag'

const ALL_BOOKS = gql`
 query Books($genre: String){
  allBooks(genre: $genre){
    title,
    author,
    published,
    genres
  }
 }
`

export default ALL_BOOKS