setTimeout(function () {
  document.getElementById("first-section").style.display = "none";
  document.getElementById("second-section").style.display = "block";
  setTimeout(function () {
    window.location.href = "slider.html";
  }, 3000);
}, 3000);
