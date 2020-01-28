import EmbarkJS from 'Embark/EmbarkJS';
import AccountBoard from 'Embark/contracts/AccountBoard';
import MessageBoard from 'Embark/contracts/MessageBoard';
import $ from 'jquery';

const JSEncrypt = require('jsencrypt');

EmbarkJS.onReady((err) => {
  // You can execute contract calls after the connection
  $(document).ready(() => {
   let privateKey, publicKey; //for use in readfunction()
   let signedUp = 0;
    $('#sendBtn').attr("disabled", true);
    $('#readMessages').attr("disabled", true);
   
    //when user clicks this, all the messages will disappear
    $('#messages').click(() =>{
      $('#messages').empty();
    });

    //click signup button
    $('#signupForm button').click(() => {
      let crypt = new JSEncrypt.JSEncrypt();
      publicKey = crypt.getPublicKey();
      privateKey = crypt.getPrivateKey();
      //console.log("Getting info of user...");
      let account = {
        'name' : $('#name').val(),
        'address' : $('#ethAddress').val(),
        'publicKey' : publicKey
      }
      //console.log(account);
      //console.log(privateKey);

      //Now call setAccount method from AccountBoard Class
      AccountBoard.methods.setAccount(account.address, account.publicKey, account.name).send();
      $('#signupForm').hide();
      signedUp = 1;
      $('#readMessages').removeAttr("disabled");
      $('#sendBtn').removeAttr("disabled");
      alert("Congrats!! You are signed up..")
    });
    
    //send a message
    $('#sendMessage button').click(() => {
      console.log("Sending Message...");
      let message_res = $('#sendData').val();
      let receiverEthAddress = $('#sendEthAddress').val();

      //send receiver's eth-address to getaccount()---
      AccountBoard.methods.getAccount(receiverEthAddress).call().then((publicKey) => {
        let crypt = new JSEncrypt.JSEncrypt();
        crypt.setKey(publicKey.toString());
        let encrypted_msg = crypt.encrypt(message_res).toString();
      });
      //finally send the encrypted message
      MessageBoard.methods.writeMessage(message_res).send();
      $('#sendEthAddress').empty();
      $('#sendData').empty();

      console.log("Message Sent Successfully");
      alert("Message Sent Successfully!");
    });


    $('#readMessages').click(() => {
      $('#messages').empty();

      //check if user is signedUp or not
      if (signedUp === 1) {
        console.log("Retreiving messages...!!");
        
        MessageBoard.methods.count().call().then((c) => {
          console.log(c);
          readMessages(c);
        });
      }
      else {
          alert("Please signup before proceeding!");
        }
    });
});
})
/*
  * TODO: Function should be called when the user wants to read his/her own messages after decrypting, and should
  * individually tackle all the separate messages for decryption. Also a check needs to be done on the private-key
  * of the end-user.
  *
  */
const readMessages = (count) => {
  for (var i = 0; i < count; i++) {
    readMessage(i);
  }
  //$('#privateKey').empty();
}

const readMessage = (messageIndex) => {

  MessageBoard.methods.messages(messageIndex).call().then((encrypted) => {
    console.log('Fetching the message...');

    // Decrypt with the private key...
    let decrypt = new JSEncrypt.JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    let decrypted = decrypt.decrypt(encrypted);
    //At first check if a user has any mail in the database or no
    console.log("Decrypted Msg: " + decrypted);
    // display the messages
    let tempMessage = $('#message').clone();
    tempMessage.empty();
    tempMessage.append(encrypted);
    tempMessage.show();

    $('#messages').append(tempMessage);
  });
}

/*  TODO

use the private key generated to automatically decrypt the messages and display it when the button is fired */