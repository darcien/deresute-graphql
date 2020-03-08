import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

let server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.express.use(helmet());

server
  .start(() => console.log('Server is running on http://localhost:4000'))
  .catch((error) => console.error('Something went wrong:', error));
