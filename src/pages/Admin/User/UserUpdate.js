import React, { useState } from 'react'
import { useTheme, Box, IconButton, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Button } from '@mui/material'
import { IconEye, IconEyeOff } from '@tabler/icons'

import { useMutation } from '@apollo/client'
import { FETCH_ALL_USERS, USER_UPDATE } from '../../../graphql'
import { useModify, useInput } from '../../../hooks'



const UserUpdate = ({ data, handleClose }) => {

  const theme = useTheme()

  let fullName = useModify(data.fullName)
  let dateOfBirth = useModify(data.dateOfBirth)
  let username = useModify(data.username)
  let password = useInput()

  const [errors, setErrors] = useState('')
  const [updateUser, { loading }] = useMutation(USER_UPDATE, {
    variables: {
      input: {
        userId: data.id,
        fullName: fullName.value,
        dateOfBirth: dateOfBirth.value,
        username: username.value,
        password: password.value
      }
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].message);
    },
    refetchQueries: [
      { query: FETCH_ALL_USERS }
    ]
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors('');
    const { data } = await updateUser();
    if (data) {
      handleClose()
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ paddingInline: { xs: 2, md: 3 } }}>
      <form noValidate onSubmit={handleSubmit} >
        {errors && (
          <FormHelperText error sx={{ mb: 2 }}>
            {errors}
          </FormHelperText>
        )}
        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-user-update">Fullname</InputLabel>
          <OutlinedInput
            {...fullName}
            id="outlined-adornment-user-update"
            type="text"
            name="fullname"
            label="Fullname"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-birthday-update">Birthday</InputLabel>
          <OutlinedInput
            {...dateOfBirth}
            id="outlined-adornment-birthday-update"
            type="text"
            name="Birthday"
            label="Birthday"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-username-update">Username</InputLabel>
          <OutlinedInput
            {...username}
            id="outlined-adornment-username-update"
            type="text"
            name="Username"
            label="Username"
          />
        </FormControl>

        <FormControl
          fullWidth
          error={Boolean(false)}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-password-update">Password</InputLabel>
          <OutlinedInput
            {...password}
            id="outlined-adornment-password-update"
            type={showPassword ? 'text' : 'password'}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

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
            Update User
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default UserUpdate