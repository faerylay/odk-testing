import React, { useState } from 'react';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, useTheme, FormHelperText } from '@mui/material';
import { IconEye, IconEyeOff } from '@tabler/icons'
import { useMutation } from '@apollo/client';

import { useInput } from '../../../hooks/useInput'
import { USER_REGISTER, FETCH_ALL_USERS } from '../../../graphql';

const UserRegister = ({ handleClose }) => {
  const theme = useTheme();
  const [errors, setErrors] = useState('')

  let fullName = useInput()
  let username = useInput()
  let password = useInput()
  let dateOfBirth = useInput()

  const [signUp, { loading }] = useMutation(USER_REGISTER, {
    onError(error) {
      setErrors(error.graphQLErrors[0].message);
    },
    variables: {
      input: {
        fullName: fullName.value,
        dateOfBirth: dateOfBirth.value,
        username: username.value,
        password: password.value,
      }
    },
    refetchQueries: [
      {
        query: FETCH_ALL_USERS, variables: {
          offset: 0,
          limit: 6,
        }
      },
    ]
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors('');
    const { data } = await signUp();
    if (data) {
      handleClose()
    }
    fullName = ''
    username = ''
    password = ''
    dateOfBirth = ''
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
      <form noValidate onSubmit={handleSubmit}>
        {errors && (
          <FormHelperText error sx={{ mb: 2 }}>
            {errors}
          </FormHelperText>
        )}
        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-fullnames-login">Fullname</InputLabel>
          <OutlinedInput
            {...fullName}
            id="outlined-adornment-fullnames-login"
            type="text"
            name="fullname"
            label="Fullname"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-dateofbirth">Birthday</InputLabel>
          <OutlinedInput
            {...dateOfBirth}
            id="outlined-adornment-dateOfBirth"
            type="text"
            name="dateOfBirth"
            label="dateOfBirth"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-usernames">Username</InputLabel>
          <OutlinedInput
            {...username}
            id="outlined-adornment-usernames"
            type="number"
            name="username"
            label="Username"
          />
        </FormControl>

        <FormControl
          fullWidth
          error={Boolean(false)}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-passwordss">Password</InputLabel>
          <OutlinedInput
            {...password}
            id="outlined-adornment-passwordss"
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
            inputProps={{}}
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
            User Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserRegister;
