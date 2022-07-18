import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { errorLink, uploadLink, authLink } from './apolloLink'

const createApolloClient = () => {
  return new ApolloClient({
    link: from([authLink, errorLink, uploadLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            users: {
              read(existing, { args: { offset, limit } }) {
                return existing && existing.slice(offset, offset + limit);
              },
              keyArgs: [],
              merge(existing, incoming, { args: { offset = 0 } }) {
                const merged = existing ? existing.slice(0) : [];
                for (let i = 0; i < incoming.users.length; ++i) {
                  merged[offset + i] = incoming[i];
                }
                return merged;
              },
            },
          },
        },
      },
    })
  });
}
export default createApolloClient