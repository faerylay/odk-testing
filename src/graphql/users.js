import { gql } from '@apollo/client'


export const ANOUNCEMENT = gql`
mutation Anouncement($adminId: ID!, $anouncementNow: Boolean) {
  anouncement(adminId: $adminId, anouncementNow: $anouncementNow) 
}
`
export const LOG_IN = gql`
mutation signIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password) {
    token
    user {
      id
      fullName
      createdAt
    }
  }
}
`

export const USER_REGISTER = gql`
mutation signUp($input: RegisterInput!) {
  signUp(input: $input) {
    token
  }
}
`;

export const USER_UPDATE = gql`
mutation updateUser($input: UpdateUserInput) {
  updateUser(input: $input) {
    id
    fullName
    dateOfBirth
  }
}
`;

export const FETCH_ALL_USERS = gql`
query GetUsers($offset: Int, $limit: Int) {
  getUsers(offset: $offset, limit: $limit) {
    count
    users {
      id
      username
      fullName
      dateOfBirth
      role
    }
  }
}
`

export const FETCH_USER = gql`
query GetUser($getUserId: ID!, $offset: Int, $limit: Int) {
  getUser(id: $getUserId, offset: $offset, limit: $limit) {
    user {
      id
      username
      fullName
      dateOfBirth
      anouncement
      certificates {
        id
        fullname
        years
        months
        amounts
        regNo
        image
        imagePublicId
      }
      achievements {
        id
        months
        image
      }
    }
    certiCount
  }
}
`

export const SEARCH_USERS = gql`
  query SearchUsers($searchQuery: String!) {
  searchUsers(searchQuery: $searchQuery) {
    id
    username
    fullName
    dateOfBirth
  }
}
`

