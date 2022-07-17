import React, { useState, useRef, useEffect } from 'react';
import { Paper, Typography } from '@mui/material'
import { useApolloClient } from '@apollo/client';

import { SEARCH_USERS } from '../../../graphql'
import useDebounce from '../../../hooks/useDebounce'
import SearchInput from './SearchInput';
import UserSearchResult from './UserSearchResult';

const Searchs = () => {
  const client = useApolloClient();

  const [users, setUsers] = useState([]);
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
      const { data } = await client.query({
        query: SEARCH_USERS,
        variables: { searchQuery: debounceSearchQuery },
      });

      setUsers(data.searchUsers);
      setLoading(false);

      const openSearchResult = debounceSearchQuery !== '';
      setIsOpenSearchResult(openSearchResult);
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
      {isOpenSearchResult && <UserSearchResult users={users} loading={loading} />}
      {!isOpenSearchResult && (
        <Paper sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>Search Users</Typography>
        </Paper>
      )}
    </SearchInput>
  )
}

export default Searchs