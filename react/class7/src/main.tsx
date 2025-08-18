import { StrictMode } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'



const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));




createRoot(document.getElementById('root')!).render(
    <StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  </StrictMode>,

)
