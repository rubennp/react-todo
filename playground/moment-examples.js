var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00 -> 0
// January 1st 1970 @ 12:00 -> 60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1470679603;
var currentMoment = moment.unix(timestamp);
console.log('Current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));


// January 3rd, 2016 @ 12:13 AM
console.log('NOW: ', moment().format('MMMM Do, YYYY @ h:mm A'));
