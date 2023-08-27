window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("nav").className = "nav sticky";
    document.getElementById("logo-w").className = "none";
    document.getElementById("logo").className = "logo";
  } else {
    document.getElementById("nav").className = "nav";
    document.getElementById("logo-w").className = "logo";
    document.getElementById("logo").className = "none";
  }
}
