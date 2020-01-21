const SHA256 = require('crypto-js/sha256');
const Block = require('./block');

// configure simpleChain.js with levelDB to persist blockchain dataset using the level Node.js library.
 
const db = require('level')('./chaindata');

class Blockchain {
    constructor() {
        // genesis block persist as the first block in the blockchain using LevelDB.
        this.getBlockHeight().then((height) => {
            if (height === -1) {
            this.addBlock(new Block("Genesis block")).then(() => console.log("Genesis block added!"));
            }
        });
    }

    /**
     * addBlock(newBlock) function includes a method to store newBlock with LevelDB.
     * @param {Block} newBlock 
     */
    async addBlock(newBlock) {
    }

    /**
     * TODO: modify getBlockHeight() function to retrieve current block height within the LevelDB chain.
     */
    async getBlockHeight() {
    }

    /**
     * TODO: modify getBlock() function to retrieve a block by it's block heigh within the LevelDB chain.
     * @param {int} blockHeight 
     */
    async getBlock(blockHeight) {
    }

    /**
     * TODO: modify the validateBlock() function to validate a block stored within levelDB.
     * @param {int} blockHeight 
     */
    async validateBlock(blockHeight) {
    }

    /**
     * TODO: modify the validateChain() function to validate blockchain stored within levelDB.
     */
     async validateChain() {
    }

    /**
     * PROVIDED: level db functions
     */  

    addBlockToDB(key, value) {
        return new Promise((resolve, reject) => {
            db.put(key, value, (error) => {
                if (error) {
                    reject(error);
                }

                console.log(`Added block #${key}`);
                resolve(`Added block #${key}`);
            })
        })
    }

    getBlockFromDB(key) {
        return new Promise((resolve, reject) => {
            db.get(key, (error, value) => {
                if (error) {
                    reject(error);
                }
                resolve(value);
            })
        })
    }

    getBlockHeightFromDB() {
        return new Promise((resolve, reject) => {
            let height = -1;

            db.createReadStream()
                .on('data', (data) => {
                    height++;
                }).on('error', (error) => {
                    reject(error);
                }).on('close', () => {
                    resolve(height);
                })
        })
    }
}
