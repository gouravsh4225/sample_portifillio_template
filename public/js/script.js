sticky = document.getElementById("nav").offsetTop;
nav = document.getElementById("nav").style.height;
window.addEventListener("scroll", function() {
  if (scrollY >= sticky) {
    document.getElementById("nav").classList.add("fixed-top");
  } else {
    document.getElementById("nav").classList.remove("fixed-top");
  }
});

function scrolldown(value) {
  $("html").animate(
    {
      scrollTop: value - 54
    },
    2000
  );
}
