const topButton = document.getElementById("scrollToTopButton");
const header = document.getElementById("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "flex";
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "0px 0px 10px 3px rgba(0, 0, 0, 0.05)";
  } else {
    topButton.style.display = "none";
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}