import React from 'react'
import { IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons';
import { useMutation } from '@apollo/client';
import { DELETE_CERTIFICATE, FETCH_ALL_CERTIFICATES } from '../../../graphql'

const CertificateDelete = ({ certificateId, imagePublicId }) => {

  const [deleteCertificate] = useMutation(DELETE_CERTIFICATE, {
    onError(error) {
      console.log(error?.graphQLErrors[0].message)
    },
    variables: {
      input: {
        certificateId, imagePublicId
      }
    },
    refetchQueries: [
      {
        query: FETCH_ALL_CERTIFICATES, variables: {
          offset: 0,
          limit: 10
        }
      },
    ]
  })

  const deleting = async () => {
    await deleteCertificate()
  }
  return (
    <IconButton onClick={deleting}>
      <IconTrash color='red' />
    </IconButton>
  )
}

export default CertificateDelete