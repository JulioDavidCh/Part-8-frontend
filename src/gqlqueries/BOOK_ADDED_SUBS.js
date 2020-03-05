import gql from 'graphql-tag'

const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      title
      author
      published
      genres
    }
  }
`

export default BOOK_ADDED