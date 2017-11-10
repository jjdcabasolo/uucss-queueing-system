const functions = require('firebase-functions');
const express = require('express');
const routes = require('./router');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


const app = express();
app.use(routes);


exports.app = functions.https.onRequest(app);
