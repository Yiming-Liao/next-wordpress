// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'http://localhost/wordpress/graphql', // 替換為你的 WordPress GraphQL 端點
    cache: new InMemoryCache(),
});

export default apolloClient;
