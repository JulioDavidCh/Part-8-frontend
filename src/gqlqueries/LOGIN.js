import gql from 'graphql-tag'

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(
      username: $username,
      password: $password
    ) {
      value
    }
  }
`

export default LOGIN