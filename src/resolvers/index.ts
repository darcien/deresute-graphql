import { join } from 'path';
import { fileLoader } from 'merge-graphql-schemas';

let resolvers = fileLoader(join(__dirname, '../**/*.resolvers.*'));

export default resolvers;
