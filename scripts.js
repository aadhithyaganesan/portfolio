window.addEventListener('load', function() {
    var container = document.querySelector('.container');
    container.classList.add('fade-in');
  });

  function getCookie(name) {
    var cookieArr = document.cookie.split(";");
  
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
  
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
  
    return null;
  }
  
  function setCookie(name, value, expiryDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
  }
  
  var visitedBefore = getCookie("visitedBefore");
  if (!visitedBefore) {
    var welcomeMessage = document.getElementById("overlay");
    welcomeMessage.style.display = "block";
    setCookie("visitedBefore", true, 365);
  }
  
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  } 

/*USING ONLY BROSWER DATA (NO COOKIES)
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
  }*/

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
