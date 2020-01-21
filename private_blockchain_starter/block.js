/*
* TODO: Make sure the Block class has all the essential properties (headers)
* that were already discussed in the class.
*/
let Crypto = require('crypto-js');
class Block {
    // let Crypto = require('crypto-js');
    constructor(data) {
        this.blockNumber = 0;
        this.prev_hash = "";
        this.hash = "";
        this.time = 0;
        this.nonce = 0;
        this.data = data;
    };
    generateHash() {
        /**
         * TODO: Add the hashing implementation and return a new Promise.
         */
        let promise = new Promise((resolve, reject) => {
            let hash = Crypto.SHA256(this.data).toString();
            if(hash == null)
                reject("Error resolving hash value");
            this.hash = hash;
            resolve(this);
        });
        return promise;
    }
}

module.exports = Block