import { join } from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

let typesArray = fileLoader(join(__dirname, './'));
let typesMerged = mergeTypes(typesArray);

export default typesMerged;
