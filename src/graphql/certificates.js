import { gql } from '@apollo/client'

export const FETCH_ALL_CERTIFICATES = gql`
query Certificates($offset: Int, $limit: Int) {
  certificates(offset: $offset, limit: $limit) {
    certificates {
      id
      fullname
      years
      months
      amounts
      regNo
      image
      imagePublicId
      createdAt
      updatedAt
    }
    count
  }
}
`
export const CREATE_CERTIFICATE = gql`
mutation createCertificate($input: CreateCertificateInput!) {
  createCertificate(input: $input) {
    id
    fullname
    years
    months
    amounts
    regNo
    createdAt
    updatedAt
  }
}
`

export const UPDATE_CERTIFICATE = gql`
  mutation updateCertificate($input: UpdateCertificateInput) {
    updateCertificate(input: $input) {
      id
      author {
        id
        fullName
      }
      fullname
      years
      months
      amounts
      regNo
      image
      imagePublicId
    }
  }
`

export const DELETE_CERTIFICATE = gql`
  mutation deleteCertificate($input: DeleteCertificateInput) {
    deleteCertificate(input: $input) {
      id
    }
  }
`

export const SEARCH_CERTIFICATE = gql`
  query SearchCertificates($searchQuery: String!) {
    searchCertificates(searchQuery: $searchQuery) {
      id
      fullname
      years
      months
      amounts
      regNo
      image
      imagePublicId
    }
  }
`