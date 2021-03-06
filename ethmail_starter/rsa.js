// RSA algorithm
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

// console.log('Private Key: ', key.exportKey(['private']));
// console.log('Public Key: ', key.exportKey(['public']));
const text = 'Hello RSA!';

// Encrypting
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);

// Decrypting
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
