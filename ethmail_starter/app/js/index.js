import EmbarkJS from 'Embark/EmbarkJS';
import AccountBoard from 'Embark/contracts/AccountBoard';
import MessageBoard from 'Embark/contracts/MessageBoard';
import $ from 'jquery';

const JSEncrypt = require('jsencrypt');
/*
* TODO: import all the essential libraries and do not forget to use jsencrypt for the encryption-
* decryption part. All the essential smart-contracts need to imported using the following command
* import Sample from 'Embark/contracts/Sample' that can be used
*
*/

EmbarkJS.onReady((err) => {
  // You can execute contract calls after the connection
  $(document).ready(() => {
    /*
    * TODO: All the event-handlers will go here. Keep it clean and understandable for the review.
    * Make sure all your code is modular (make functions)
    * 
    */
   
    
    //when user clicks this, all the messages will disappear
    $('#messages').click(() =>{
      $('#messages').empty();
    });

    //click signup button
    $('#signupForm button').click(() => {
      let crypt = new JSEncrypt.JSEncrypt();
      let publicKey = crypt.getPublicKey();
      let privateKey = crypt.getPrivateKey();
      //console.log("Getting info of user...");
      let account = {
        'name' : $('#name').val(),
        'address' : $('#ethAddress').val(),
        'publicKey' : publicKey
      }
      console.log(account);
      console.log(privateKey);

      //Now call setAccount method from AccountBoard Class
      AccountBoard.methods.setAccount(account.address, account.publicKey, account.name).send();
      $('#signupForm').hide();
      alert("Congrats!! You are signed up..")
    });
    
    //send a message
    $('#sendMessage button').click(() => {
      let message_res = $('#sendData').val();
      MessageBoard.methods.writeMessage(message_res).send();
      alert("Message Sent!");
    });


    $('#readMessages').click(() => {
      
    });

  });
});


/*
* TODO: Function should be called when the user wants to read his/her own messages after decrypting, and should 
* individually tackle all the separate messages for decryption. Also a check needs to be done on the private-key
* of the end-user.
*
*/
const readMessages = (count) => {
  
}


