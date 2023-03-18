function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Get the modal
var modal = document.getElementById("myModal");

// Open the modal
function openModal(img) {
  // var img = document.getElementById("myImg");
  var img = img
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}



