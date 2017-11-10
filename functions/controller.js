'use strict'

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.printSample = (request, response) => {
  return response.status(200).send("Hello from Firebase!");
};

exports.addMessage = (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database uadmsing the Firebase Admin SDK.
  admin.database().ref('/messages').push({original: original}).then(snapshot => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref);
  });
};

exports.enqueue = (req, res) => {
	const temp = {
		date: '10/11',
		name: {
			first: 'Beili',
			middle: 'Llagas',
			last: 'Cepe'
		},
		est_time: req.body.est_time,
		plate_no: req.body.plate_no,
		phone_no: req.body.phone_no
	};

	// read number in queue
	const next_num = 1;
	console.log(temp);


	admin.database().ref('/queue/'+temp.date).push({
		num: next_num,
		name: temp.name,
		est_time: temp.est_time,
		plate_no: temp.plate_no,
		phone_no: temp.phone_no,
	}).then(snapshot => {
		re.redirect(303, snapshot.ref);
	});
};

exports.dequeue = (req, res) => {

};

exports.getInitialInfo = (req, res) => {
	
};
