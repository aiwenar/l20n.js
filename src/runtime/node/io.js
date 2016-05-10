/* jshint node:true */

import { readFile } from 'fs';
import { L10nError } from '../../lib/errors';

function load(url) {
  return new Promise(resolve => {
    readFile(url, (err, data) => {
      if (err) {
        resolve(new L10nError(err.message));
      } else {
        resolve(data.toString());
      }
    });
  });
}

export function fetchResource(res, { code }) {
  const url = res.replace('{locale}', code);
  return load(url).catch(e => e);
}
