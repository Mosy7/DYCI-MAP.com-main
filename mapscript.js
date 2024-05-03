

import firebaseConfig from './firebase-config.js';
initializeApp(firebaseConfig);

 
  function searchRoom() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var searchResultsBody = document.getElementById('searchResultsBody');
    var buildingAndRoom = document.getElementById('buildingAndRoom');
  
    // Clear previous search results only if there are existing ones
    if (searchResultsBody.innerHTML.trim() !== '') {
      searchResultsBody.innerHTML = '';
    }
    buildingAndRoom.innerHTML = '';
  
    database.ref('Buildings').orderByKey().on('value', function (snapshot) {
      snapshot.forEach(function (building) {
        building.child('rooms').forEach(function (room) {
          var roomName = room.key.toLowerCase();
          if (roomName.includes(searchTerm)) {
            // Check if schedule exists before fetching
            if (room.hasChild('schedule')) {
              room.child('schedule').on('value', function (scheduleSnapshot) {
                var scheduleHTML = '<tr><th>Schedule</th></tr>';
                scheduleSnapshot.forEach(function (scheduleEntry) {
                  scheduleHTML += '<tr><td>' + scheduleEntry.key + '</td><td>' + scheduleEntry.val() + '</td></tr>';
                });
                searchResultsBody.innerHTML += scheduleHTML;
                buildingAndRoom.innerHTML = '<p>Building: ' + building.key + '</p><p>Room: ' + room.key + '</p>';
              });
            } else {
              // Handle case where room has no schedule
              console.log('Room ' + room.key + ' has no schedule');
            }
          }
        });
      });
    });
  }