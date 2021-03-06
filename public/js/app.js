<<<<<<< HEAD
// this is mock data, but when we create our API
// we'll have it return data that looks like this
var MOCK_STATUS_UPDATES = {
	"entries": [
        {
            "entryId": "1111111",
            "message": "Can't believe how much fun I'm having.",
            "guestId": "aaaaaa",
            "guestName": "John Doe",
            "datePublished": 1470016976609
        },
        {
            "entryId": "2222222",
            "message": "Have FOMO? Well you SHOULD!",
            "guestId": "bbbbbb",
            "guestName": "Jane Doe",
            "datePublished": 1470016976609
        },
        {
            "entryId": "3333333",
            "message": "They're giving out immortality and free $$$ where I am.",
            "guestId": "ccccc",
            "guestName": "Jim Doe",
            "datePublished": 1470016976609
        },
        {
            "entryId": "4444444",
            "message": "humble brag humble brag humble brag",
            "guestId": "dddddd",
            "guestName": "Hoe Door",
            "datePublished": 1470016976609
        }
    ]
};

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getRecentStatusUpdates(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.

	setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 1);
}

// 
function displayStatusUpdates(data) {
    for (index in data.entries) {
	   $('body').append('<p>' + new Date().toUTCString() + " -- " + data.entries[index].guestName.bold() + " -- " + data.entries[index].message + '</p>');
    }
}

// 
function getAndDisplayStatusUpdates() {
	getRecentStatusUpdates(displayStatusUpdates);
}

//  on page load do this
$(function() {
	getAndDisplayStatusUpdates();
})
=======


















// // this function's name and argument can stay the
// // same after we have a live API, but its internal
// // implementation will change. Instead of using a
// // timeout function that returns mock data, it will
// // use jQuery's AJAX functionality to make a call
// // to the server and then run the callbackFn
// var db = "585730b3f5a1e91878d36ab1"

// function getRecentStatusUpdates(callbackFn) {
//     var ajax = $.ajax('/logroom/' + db, {
//         type: 'GET', 
//         dataType: 'json'
//     }).done(function(data){
//         console.log(data);
//         var entries = data.entries.forEach(function(entry){
//             console.log(entry.logEntry)
//             $('.js-entries').append(entry.logEntry + '<br>');
//         })
//     })
// }

// // this function stays the same when we connect
// // to real API later
// function displayStatusUpdates(data) {
//     for (index in data.statusUpdates) {
// 	   $('body').append(
//         '<p>' + data.entries[index].guestName + ", " +data.entries[index].message + '</p>');
//     }
// }

// // this function can stay the same even when we
// // are connecting to real API
// function getAndDisplayStatusUpdates() {
// 	getRecentStatusUpdates(displayStatusUpdates);
// }

// var initial = function(){
//     $('.js-logroom').submit(function(event){
//         event.preventDefault();
//         var ajax = $.ajax('/home', {
//             method: 'GET',
//             url: '/home',
//             dataType: 'html'
//         })
//     });

//     $('.getentries').on('click', function(event){
//         event.preventDefault();
//         getAndDisplayStatusUpdates();
//     });
// };

// $(document).ready(function(){
//     initial();
// });
// //  on page load do this
// // $(function() {
// // 	getAndDisplayStatusUpdates();
// // })
>>>>>>> feature/mvp-client-with-mock-data
