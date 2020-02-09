import gql from 'graphql-tag'

const ALL_AUTHORS = gql`
{
  allAuthors{
    name,
    born,
    bookCount,
    id
  }
}
`

export default ALL_AUTHORS