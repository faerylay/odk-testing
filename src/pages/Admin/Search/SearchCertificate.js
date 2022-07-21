import React, { useState, useRef, useEffect } from 'react';
import { Paper, Typography } from '@mui/material'
import { useApolloClient } from '@apollo/client';

import { SEARCH_CERTIFICATE } from '../../../graphql'
import useDebounce from '../../../hooks/useDebounce'
import SearchInput from './SearchInput';
import CertiSearchResult from './CertiSearchResult';

const SearchCertificate = () => {

  const client = useApolloClient();
  const [errors, setErrors] = useState('')
  const [certificates, setCertificates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpenSearchResult, setIsOpenSearchResult] = useState(false);

  const inputRef = useRef(null);

  const debounceSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    // Clear search input value, after location change
    setSearchQuery('');
  }, []);


  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await client.query({
          query: SEARCH_CERTIFICATE,
          variables: { searchQuery: debounceSearchQuery },
        });

        setCertificates(data.searchCertificates);
        setLoading(false);

        const openSearchResult = debounceSearchQuery !== '';
        setIsOpenSearchResult(openSearchResult);
      } catch (error) {
        setErrors(error.graphQLErrors[0].message)
      }
    };

    debounceSearchQuery ? search() : setIsOpenSearchResult(false);
    return () => setLoading(false);
  }, [debounceSearchQuery, client]);

  const handleInputChange = async (e) => {
    const value = e.target.value.replace(/^\s+/g, '');
    setSearchQuery(value);
    if (value) {
      setLoading(true);
    }
  };

  const handleInputFocus = () => searchQuery && setIsOpenSearchResult(true);


  return (
    <SearchInput
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      value={searchQuery}
      inputRef={inputRef}
    >
      {isOpenSearchResult && <CertiSearchResult certificates={certificates} loading={loading} errors={errors} />}
      {!isOpenSearchResult && (
        <Paper sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {
            errors ? (
              <Typography>{errors}</Typography>
            ) : (
              <Typography>Search Certificates</Typography>
            )
          }
        </Paper>
      )}
    </SearchInput>
  )
}

export default SearchCertificate