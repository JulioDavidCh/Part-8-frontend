import gql from 'graphql-tag'

const ALL_AUTHORS = gql`
{
  allAuthors{
    name,
    born,
    bookCount
  }
}
`

export default ALL_AUTHORS