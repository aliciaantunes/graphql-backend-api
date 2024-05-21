import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from 'graphql-tag';


// Defina os tipos do GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
  `;

// Defina os resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

// Crie uma instância do Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Inicie o servidor
  startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });