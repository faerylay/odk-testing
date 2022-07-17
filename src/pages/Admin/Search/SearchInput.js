import React from 'react'
import { Box, InputAdornment, OutlinedInput, useTheme } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';


const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
  width: 430,
  paddingLeft: 16,
  paddingRight: 16,
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important'
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '100%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '100%',
    background: '#fff'
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));

const SearchInput = ({ onChange, onFocus, value, inputRef, children }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ px: 2, py: 1 }}>
        <OutlineInputStyle
          autoComplete='off'
          sx={{ height: 40, width: '100%' }}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          ref={inputRef}
          type="text"
          id="input-search-user"
          placeholder="Search Users"
          startAdornment={
            <InputAdornment position="start">
              <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
            </InputAdornment>
          }
          aria-describedby="search-user"
          inputProps={{ 'aria-label': 'weight' }}
        />
      </Box>
      {children}
    </Box>
  )
}
export default SearchInput