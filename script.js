const topButton = document.getElementById("scrollToTopButton");
const header = document.getElementById("header");
const logoLight = document.getElementById("header_logo");
const logoDark = document.getElementById("header_logo_dark");

window.onscroll = function() {scrollFunction()};

logoDark.style.display = "none";

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "flex";
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "0px 0px 10px 3px rgba(0, 0, 0, 0.05)";
    logoLight.style.display = "none";
    logoDark.style.display = "block";
  } else {
    topButton.style.display = "none";
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    logoLight.style.display = "block";
    logoDark.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}