import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, useTheme, FormHelperText } from '@mui/material';
import { IconEye, IconEyeOff } from '@tabler/icons'
import { useInput } from '../../../hooks/useInput'
import { auth } from '../../../redux'
import { useMutation } from '@apollo/client'
import { LOG_IN } from '../../../graphql';
import jwt_decode from 'jwt-decode';

const AuthLogin = ({ ...others }) => {
  const dispatch = useDispatch()
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
      const response = await signIn({
        variables: {
          username: username?.value,
          password: password?.value,
        },
      });
      const decoded = jwt_decode(response.data.signIn.token);
      dispatch(auth(response.data.signIn));
      if (decoded.role === 'Admin') {
        navigate(`/admin/${decoded._id}`);
      }
      if (decoded.role === 'User') {
        navigate(`/profile/${decoded._id}`);
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
    <>
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
            type="username"
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
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                onChange={(event) => console.log(event.target.checked)}
                name="checked"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Stack> */}

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
    </>
  );
};

export default AuthLogin;
