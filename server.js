const { gql,
  ApolloServer
} = require('apollo-server');

const typeDefs = gql`
    type Query {
        greetingsClient: String
    }
`;

const resolvers = {
  Query: {
    greetingsClient: () => {
      console.log('GreetingsClient is called');
      return 'Hello fellow client !'
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${ url }`));
