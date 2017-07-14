(function () {
  'use strict';

  var header = document.querySelector('header');
  // var offlineDiv = document.getElementsByClassName('mdl-layout-offline')[0];  
  //After DOM Loaded
  document.addEventListener('DOMContentLoaded', function(event) {

    //On initial load to check connectivity
    if (!navigator.onLine) {
      updateNetworkStatus();
    }

    window.addEventListener('online', updateNetworkStatus, false);
    window.addEventListener('offline', updateNetworkStatus, false);
  });

  //To update network status
  function updateNetworkStatus() {
    if (navigator.onLine) {      
      header.style.background = 'rgb(244,67,54)'; 
      // offlineDiv.classList.add('hidden');
    }
    else {      
      // offlineDiv.classList.remove('hidden');
      header.style.background = '#9E9E9E';
    }
  }
})();