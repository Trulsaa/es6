import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout.js';

console.log(kebabCase('Truls ruler'));

console.log(addTax(100, 0.15));
