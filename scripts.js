window.addEventListener('load', function() {
    var container = document.querySelector('.container');
    container.classList.add('fade-in');
  });

 var visitedBefore = localStorage.getItem("visitedBefore");
  if (!visitedBefore) {
    var welcomeMessage = document.getElementById("overlay");
    welcomeMessage.style.display = "block";
    localStorage.setItem("visitedBefore", true);
  }

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function openUX() {
    var container = document.getElementById("ux");
    closeEdit();
    closeAbout();
    container.style.display = "block";
  }

  function openEdit() {
    var container = document.getElementById("edit");
    closeUX();
    closeAbout();
    container.style.display = "block";
  }

  function openAbout() {
    var container = document.getElementById("about");
    closeEdit();
    closeUX();
    container.style.display = "block";
  }

  function closeUX() {
    var container = document.getElementById("ux");
    container.style.display = "none";
  }



  function closeEdit() {
    var container = document.getElementById("edit");
    container.style.display = "none";
  }

  function closeAbout() {
    var container = document.getElementById("about");
    container.style.display = "none";
  }