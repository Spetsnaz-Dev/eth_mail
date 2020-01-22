pragma solidity ^0.4.23;

contract AccountBoard {
    struct Account {
        string publicKey;
        string userName;
    }
    mapping (address => Account) public accounts;
    address[] public userAccounts;

    function setAccount(address _address, string _publicKey, string _userName) {
        Account storage account;
        account.publicKey = _publicKey;
        account.userName = _userName;
        userAccounts.push(_address);
        accounts[_address] = account;
        userAccounts.push(_address);
    }

    function getAccount() public returns(address[]) {
        return userAccounts;
    }
    function getAccounts(address pos) public returns (string) {
        return address[pos].publicKey;
    }
}
                                                                                                                                                        