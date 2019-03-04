// var Hmac = require('./browserHmac');
import { Hmac } from './browserHmac';

// var Md5 = require('./browserMd5');

import { Md5 } from './browserMd5';

// var Sha1 = require('./browserSha1');

import { Sha1 } from './browserSha1';

// var Sha256 = require('./browserSha256');

import { Sha256 } from './browserSha256';

/**
 * @api private
 */
export default {
  createHash: function createHash(alg) {
    alg = alg.toLowerCase();
    if (alg === 'md5') {
      return new Md5();
    } else if (alg === 'sha256') {
      return new Sha256();
    } else if (alg === 'sha1') {
      return new Sha1();
    }

    throw new Error('Hash algorithm ' + alg + ' is not supported in the browser SDK');
  },
  createHmac: function createHmac(alg, key) {
    alg = alg.toLowerCase();
    if (alg === 'md5') {
      return new Hmac(Md5, key);
    } else if (alg === 'sha256') {
      return new Hmac(Sha256, key);
    } else if (alg === 'sha1') {
      return new Hmac(Sha1, key);
    }

    throw new Error('HMAC algorithm ' + alg + ' is not supported in the browser SDK');
  },
  createSign: function () {
    throw new Error('createSign is not implemented in the browser');
  }
}
