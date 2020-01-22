import EmbarkJS from 'Embark/EmbarkJS';
import $ from 'jquery';

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
   
    

    $('#messages').click(() =>{
      
    });


    $('#signupForm button').click(() => {
    
    });

    $('#sendMessage button').click(() => {

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


