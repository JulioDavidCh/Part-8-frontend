import gql from 'graphql-tag'

const ALL_BOOKS = gql`
{
  allBooks{
    title,
    author,
    published
  }
}
`

export default ALL_BOOKS