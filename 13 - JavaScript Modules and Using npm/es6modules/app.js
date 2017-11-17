import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';

import userObject, { createURL, gravatar } from './src/user';

const truls = new userObject('Truls', 'truls.aa@gmail.com', 'truls.com');
const profile = createURL(truls.name);
const image = gravatar(truls.email);
console.log(image);
