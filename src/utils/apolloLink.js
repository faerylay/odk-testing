import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

const REACT_APP_API_URL = 'https://odk-testing.herokuapp.com/graphql'
// const REACT_CLONE_URL = 'http://localhost:4000/graphql'

export const uploadLink = createUploadLink({
  uri: REACT_APP_API_URL,
  credentials: 'include'
});


export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('profile');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});



export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      )
    }
    );
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});