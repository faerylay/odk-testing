import { gql } from '@apollo/client'



export const CREATE_ACHIEVEMENT = gql`
  mutation createAchievement($input: CreateAchievementInput) {
    createAchievement(input: $input) {
      id
      months
    }
  }
`
export const DELETE_ACHIEVEMENT = gql`
mutation deleteAchievement($input: DeleteAchievementInput) {
  deleteAchievement(input: $input) {
    id
  }
}
`
export const FETCH_ALL_ACHIEVEMENTS = gql`
  query achievements($offset: Int, $limit: Int) {
    achievements(offset: $offset, limit: $limit) {
      achievements {
        id
        author {
          id
          fullName
        }
        months
        image
        imagePublicId
      }
      count
    }
  }
`
