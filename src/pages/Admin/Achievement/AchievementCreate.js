import React, { useState } from 'react'
import { Box, useTheme, Fab, FormControl, FormHelperText, InputLabel, OutlinedInput, Button } from '@mui/material'
import { IconSquarePlus } from '@tabler/icons'
import { useMutation } from '@apollo/client'
import { useInput } from '../../../hooks/useInput'
import { CREATE_ACHIEVEMENT, FETCH_ALL_ACHIEVEMENTS } from '../../../graphql'


const MAX_POST_IMAGE_SIZE = 5000000;

const AchievementCreate = ({ data, handleClose }) => {
  const theme = useTheme()

  let months = useInput()
  const [image, setImage] = useState('')
  const [errors, setErrors] = useState('')
  const [fileSize, setFileSize] = useState('')
  const handlePostImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size >= MAX_POST_IMAGE_SIZE) {
      setFileSize(`File size should be less then ${MAX_POST_IMAGE_SIZE / 1000000}MB`);
      return;  // 5 MB
    }
    setImage(file);
    e.target.value = null;
  }


  const [createAchievement, { loading }] = useMutation(CREATE_ACHIEVEMENT, {
    variables: {
      input: {
        author: data?.id,
        months: months?.value,
        image: image ? image : null,
      }
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].message);
    },
    refetchQueries: [
      { query: FETCH_ALL_ACHIEVEMENTS }
    ]
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors('');
    const { data } = await createAchievement();
    if (data) {
      handleClose()
    }
    months = ''
    setImage('')
  }

  return (
    <Box sx={{ paddingInline: { xs: 2, md: 3 } }}>
      <form noValidate onSubmit={handleSubmit} >
        {(errors || fileSize) && (
          <FormHelperText error sx={{ mb: 2 }}>
            {errors || fileSize}
          </FormHelperText>
        )}
        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-months-achieve">Month</InputLabel>
          <OutlinedInput
            {...months}
            id="outlined-adornment-months-achieve"
            type="text"
            name="months"
            label="Months"
          />
        </FormControl>

        <label htmlFor="achievementImage" style={{ paddingInline: 5 }}>
          <input
            style={{ display: "none" }}
            id="achievementImage"
            name="achievementImage"
            type="file"
            accept="application/pdf"
            onChange={handlePostImageUpload}
          />
          <Fab
            color="inherit"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
            sx={{ boxShadow: 'none', zIndex: 1, borderRadius: 1.5, width: 50 }}
            disableRipple={true}
            disableFocusRipple={true}
          >
            <IconSquarePlus />
          </Fab>
        </label>

        <Box sx={{ mt: 2 }}>
          <Button
            disableElevation
            disabled={loading}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Create Achievement
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default AchievementCreate