import fetch from 'node-fetch';

import { baseURL } from './constants';

async function fetchAPI(path: string) {
  let res = await fetch(`${baseURL}${path}`);
  return res.json();
}

export { fetchAPI };
