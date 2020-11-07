// Initialize Firebase - https://firebase.google.com/docs/web/setup
  var config = {
    apiKey: "AIzaSyD0w-dTYRHGDVFBTia2uIt6BMF5U-QQOms",
    authDomain: "helpbot-notification.firebaseapp.com",
    databaseURL: "https://helpbot-notification.firebaseio.com",
    projectId: "helpbot-notification",
    storageBucket: "helpbot-notification.appspot.com",
    messagingSenderId: "504252316075",
  };
  firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function() {
        return messaging.getToken();
    })
    .then(function(token) {
        // send rest call to add to database
        // $.ajax('https://example.firebaseio.com/pushtokens/'+token+'.json', {
        //     method: 'PUT',
        //     data: 'true',
        //     error: function(err) {
        //     }
        // });
        console.log(token);
    })
    .catch(function(err) {
        console.log('Permission denied');
    });
