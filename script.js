const topButton = document.getElementById("scrollToTopButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "flex";
  } else {
    topButton.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}