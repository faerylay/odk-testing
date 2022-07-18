import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
const REACT_APP_API_URL = 'https://odk-testing.herokuapp.com/graphql'

// const REACT_APP_API_URL = 'http://localhost:4000/graphql'


export const uploadLink = createUploadLink({ uri: REACT_APP_API_URL, credentials: 'include' });
// const httpLink = new HttpLink({
//   uri: REACT_APP_API_URL,
//   credentials: 'include'
// });

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('profile');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// export const httpLink = new HttpLink({
//   uri: REACT_APP_API_URL,
//   credentials: 'include'
// });
// export const authLink = () => {
//   const request = (operation) => {
//     const token = localStorage.getItem('profile');
//     operation.setContext({
//       headers: {
//         authorization: token,
//       },
//     });
//   };

//   return new ApolloLink(
//     (operation, forward) =>
//       new Observable((observer) => {
//         let handle;
//         Promise.resolve(operation)
//           .then((oper) => request(oper))
//           .then(() => {
//             handle = forward(operation).subscribe({
//               next: observer.next.bind(observer),
//               error: observer.error.bind(observer),
//               complete: observer.complete.bind(observer),
//             });
//           })
//           .catch(observer.error.bind(observer));

//         return () => {
//           if (handle) handle.unsubscribe();
//         };
//       })
//   );
// };


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