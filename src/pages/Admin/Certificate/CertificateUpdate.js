import React, { useState } from 'react'
import { useTheme, Box, FormControl, FormHelperText, InputLabel, OutlinedInput, Button } from '@mui/material'
import { useMutation } from '@apollo/client'


import { UPDATE_CERTIFICATE, FETCH_ALL_CERTIFICATES } from '../../../graphql'
import { useModify } from '../../../hooks/useModify'


const CertificateUpdate = ({ data, handleClose }) => {

  const theme = useTheme()

  let fullname = useModify(data.fullname)
  let years = useModify(data.years)
  let months = useModify(data.months)
  let amounts = useModify(data.amounts)
  let regNo = useModify(data.regNo)

  const [errors, setErrors] = useState('')
  const [updateCertificate, { loading }] = useMutation(UPDATE_CERTIFICATE, {
    variables: {
      input: {
        certificateId: data.id,
        imagePublicId: data.imagePublicId,
        fullname: fullname.value,
        years: years.value,
        months: months.value,
        amounts: amounts.value,
        regNo: regNo.value,
      }
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].message);
    },
    refetchQueries: [
      { query: FETCH_ALL_CERTIFICATES }
    ]
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors('');
    const data = await updateCertificate();
    if (data.data) {
      handleClose()
    }
  }


  return (
    <Box sx={{ paddingInline: { xs: 2, md: 3 } }}>
      <form noValidate onSubmit={handleSubmit} >
        {errors && (
          <FormHelperText error sx={{ mb: 2 }}>
            {errors}
          </FormHelperText>
        )}
        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-fullname-certi">Fullname</InputLabel>
          <OutlinedInput
            {...fullname}
            id="outlined-adornment-fullname-certi"
            type="text"
            name="fullname"
            label="Fullname"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-years">Years</InputLabel>
          <OutlinedInput
            {...years}
            id="outlined-adornment-years"
            type="text"
            name="years"
            label="Years"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-months">Months</InputLabel>
          <OutlinedInput
            {...months}
            id="outlined-adornment-months"
            type="text"
            name="months"
            label="Months"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-amounts">Amounts</InputLabel>
          <OutlinedInput
            {...amounts}
            id="outlined-adornment-amounts"
            type="text"
            name="amounts"
            label="Amounts"
          />
        </FormControl>

        <FormControl fullWidth error={Boolean(false)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-regNo">Register No</InputLabel>
          <OutlinedInput
            {...regNo}
            id="outlined-adornment-regNo"
            type="text"
            name="regNo"
            label="RegNo"
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
            Update Certificate
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default CertificateUpdate