pragma solidity ^0.4.23;
//pragma experimental ABIEncoderV2;

contract MessageBoard {
    string[] public messages;
    uint public count;

    function writeMessage(string memory message) public {
        messages.push(message);
        count += 1;
    }
    function messages(uint val) public returns(string) {
        return messages[val];
    }
}
