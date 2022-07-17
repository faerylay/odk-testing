import React from 'react'
import { IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons';
import { useMutation } from '@apollo/client';
import { DELETE_ACHIEVEMENT, FETCH_ALL_ACHIEVEMENTS } from '../../../graphql'

const AchievementDelete = ({ achievementId, imagePublicId }) => {
  const [deleteAchievement] = useMutation(DELETE_ACHIEVEMENT, {
    onError(error) {
      console.log(error?.graphQLErrors[0].message)
    },
    variables: {
      input: {
        achievementId, imagePublicId
      }
    },
    refetchQueries: [
      { query: FETCH_ALL_ACHIEVEMENTS }
    ]
  })

  const deleting = async () => {
    await deleteAchievement()
  }
  return (
    <IconButton onClick={deleting}>
      <IconTrash color='red' />
    </IconButton>
  )
}

export default AchievementDelete