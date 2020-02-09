import gql from 'graphql-tag'

const EDIT_AUTHOR = gql`
  mutation EditAuthor($name: String!, $setToBorn: Int!) {
    editAuthor(
      name: $name,
      setToBorn: $setToBorn
    ) {
      name
      born
      bookCount
      id
    }
  }
`

export default EDIT_AUTHOR