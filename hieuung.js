window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    document.querySelector("header").style.backgroundColor =
      "rgb(109, 109, 242)";
    document.querySelector("header").style.zIndex = "99";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
});

var album = [];
for (var i = 0; i < 4; i++) {
  album[i] = new Image();
  album[i].src = "img/banner" + i + ".jpg";
}
var interval = setInterval(slideshow, 2000);
var index = 0;
function slideshow() {
  index++;
  if (index > 3) {
    index = 0;
  }
  document.getElementById("banner").src = album[index].src;
}
