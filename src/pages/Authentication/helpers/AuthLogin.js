import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, useTheme, FormHelperText } from '@mui/material';
import { IconEye, IconEyeOff } from '@tabler/icons'
import { useInput } from '../../../hooks/useInput'

import { useMutation } from '@apollo/client'
import { LOG_IN } from '../../../graphql';


const AuthLogin = ({ ...others }) => {

  const navigate = useNavigate();
  const theme = useTheme();
  const [signIn, { loading }] = useMutation(LOG_IN)
  const [errors, setErrors] = useState('')
  const username = useInput()
  const password = useInput()
  useEffect(() => {
    if (localStorage.getItem('profile')) {
      navigate('/')
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors('');
    try {
      const { data } = await signIn({
        variables: {
          username: username?.value,
          password: password?.value,
        },
      });
      const { token, user } = data?.signIn;

      if (token !== 'hello') {
        const jwtToken = jwt_decode(token);
        if (jwtToken?.role !== 'Admin' && jwtToken?.role !== 'User') return navigate(`/login`);
        if (jwtToken?.role === 'User') {
          localStorage.setItem('profile', token);
          navigate(`/profile/${jwtToken?._id}`);
          return;
        }
      }
      if (data?.signIn?.token === 'hello') {
        return navigate(`/confirm/${user?.id}`);
      }
    } catch (error) {
      setErrors(error.graphQLErrors[0].message);
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
    <form noValidate onSubmit={handleSubmit} {...others}>
      {errors && (
        <FormHelperText error id="outlined-adornment-username-login" sx={{ mb: 2 }}>
          {errors}
        </FormHelperText>
      )}

      <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput, mb: 2 }}>

        <InputLabel htmlFor="outlined-adornment-username-login">Username</InputLabel>
        <OutlinedInput
          {...username}
          id="outlined-adornment-username-login"
          type="text"
          name="username"
          label="Username"
          inputProps={{}}
        />

      </FormControl>

      <FormControl
        fullWidth
        error={Boolean(false)}
        sx={{ ...theme.typography.customInput }}
      >
        <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
        <OutlinedInput
          {...password}
          id="outlined-adornment-password-login"
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
          Sign in
        </Button>
      </Box>
    </form>
  );
};

export default AuthLogin;
