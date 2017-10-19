'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const request = require('request-promise');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.sendReply = functions.database.ref('/chat/{chatID}').onWrite(event => {
const snapshot = event.data;
    if(snapshot.val().sender!='admin')
    {

       if((snapshot.val().message.indexOf('thematic investment')!=-1) || (snapshot.val().message.indexOf('thematic investments')!=-1) || snapshot.val().message == 'ti')
        {

        admin.database().ref('/chat').push({
                                            'message'   : "Invest in SMART CITIES, Play smart with companies expected to benefit from GOI's flagship smart city project, Index Value: 444.49, 1 Year Return: 39.70%, 1 Month Return: -0.89%, Rs. 100 invested in this (vs NIFTY) 2 years back would be worth Rs. 167.93 (vs 122.57) today, Link: https://www.smallcase.com/smallcase/SCNM_0013",
                                            'sender'    : 'admin'
                                        });
        }
        else if((snapshot.val().message.indexOf('want to buy')!=-1) || (snapshot.val().message.indexOf('want to go')!=-1) || (snapshot.val().message.indexOf('want to do')!=-1))
        {

            admin.database().ref('/chat').push({
                        'message'   : 'Please enter the price of it:',
                        'sender'    : 'admin'
                    });
        }
        else
        {

            admin.database().ref('/chat').push({
                                    'message'   : 'You should be afford that in next 5-7 years. Check https://goo.gl/VK8Ctc for the detailed plan!',
                                    'sender'    : 'admin'
                                });
        }


    }
});

