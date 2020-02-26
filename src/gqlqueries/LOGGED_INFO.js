import gql from 'graphql-tag'

const LOGGED_INFO = gql`
{
  me{
    username
    favoriteGenre
  }
}
`

export default LOGGED_INFO