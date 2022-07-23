import React, { useState, useEffect } from 'react'
import { Box, Button, FormControl, InputLabel, OutlinedInput, useTheme, FormHelperText } from '@mui/material';
import { useMutation } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom';

import { ADMIN_CONFIRM_CODE } from '../../graphql'
import { useInput } from '../../hooks/useInput';


const AdminConfirm = () => {
  const { adminId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const confirmCodeNumber = useInput()

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      navigate('/')
    }
  }, [navigate]);

  const [errors, setErrors] = useState('')
  const [confirmCode, { loading }] = useMutation(ADMIN_CONFIRM_CODE)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors('');
    try {
      const { data } = await confirmCode({
        variables: {
          adminId,
          confirmCode: Number(confirmCodeNumber?.value),
        },
      });

      if (data?.confirmCode) {
        localStorage.setItem('profile', data?.confirmCode?.token);
        navigate(`/admin/${adminId}`);
      }
    } catch (error) {
      setErrors(error.graphQLErrors[0].message);
    }

  }
  return (
    <>
      <form noValidate onSubmit={handleSubmit} >
        {errors && (
          <FormHelperText error id="outlined-adornment-confirm-code" sx={{ mb: 2 }}>
            {errors}
          </FormHelperText>
        )}

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput, mb: 2 }}>

          <InputLabel htmlFor="outlined-adornment-confirm-code">Confirm Code</InputLabel>
          <OutlinedInput
            {...confirmCodeNumber}
            id="outlined-adornment-confirm-code"
            type="text"
            name="confirmCode"
            label="Confirm Code"
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
            Confirm Code
          </Button>
        </Box>
      </form>
    </>
  )
}

export default AdminConfirm