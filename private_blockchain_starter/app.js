//Importing the block class
const BlockClass = require('./block.js');



// Creating a block object

const block = new BlockClass("Test Block");

//console.log(block);
// Generating the block hash
let promise = block.generateHash();
promise.then((result) => {

    console.log(`Block Hash: ${result.hash}`);

    console.log(`Block: ${JSON.stringify(result)}`);

}).catch((error) => { console.log(error) });
