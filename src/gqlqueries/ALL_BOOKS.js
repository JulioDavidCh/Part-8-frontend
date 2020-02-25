import gql from 'graphql-tag'

const ALL_BOOKS = gql`
{
  allBooks{
    title,
    author,
    published,
    genres
  }
}
`

export default ALL_BOOKS