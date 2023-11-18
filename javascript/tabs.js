function openTab(evt, tabName) {
    // Get all tab content elements
    var tabcontent = document.getElementsByClassName("tabcontent");
  
    // Hide all tab content
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all tab link/button elements
    var tablinks = document.getElementsByClassName("tablinks");
  
    // Remove the active class from all tab links/buttons
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the selected tab content and mark the selected tab as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Show the first tab by default
  document.getElementById("quickAccess").style.display = "block";
  document.getElementsByClassName("tablinks")[0].className += " active";
  