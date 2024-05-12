

import firebaseConfig from 'firebase-config.js';
firebase.initializeApp(firebaseConfig);

 
function searchRoom() {
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  var searchResultsBody = document.getElementById('searchResultsBody');
  var buildingAndRoom = document.getElementById('buildingAndRoom');

  // Clear previous search results only if there are existing ones
  if (searchResultsBody.innerHTML.trim() !== '') {
    searchResultsBody.innerHTML = '';
  }
  buildingAndRoom.innerHTML = '';

  database.ref('Rooms')
    .orderByChild('Name')
    .startAt(searchTerm)
    .endAt(searchTerm + '\uf8ff')
    .on('value', function (snapshot) {
      snapshot.forEach(function (roomSnapshot) {
        var room = roomSnapshot.val();
        // Check if schedule exists before fetching
        if (room.hasOwnProperty('Schedule')) {
          var scheduleHTML = '<tr><th>Schedule</th></tr>';
          Object.entries(room.Schedule).forEach(([key, value]) => {
            scheduleHTML += '<tr><td>' + key + '</td><td>' + value + '</td></tr>';
          });
          searchResultsBody.innerHTML += scheduleHTML;
          buildingAndRoom.innerHTML = '<p>Building: ' + room.Building + '</p><p>Room: ' + room.Name + '</p>';
        } else {
          // Handle case where room has no schedule
          console.log('Room ' + room.Name + ' has no schedule');
        }
      });
    });
}
