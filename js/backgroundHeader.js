window.addEventListener("scroll", function() {
    var headerDiv = document.getElementsByClassName("header_div")[0]; 

    if (window.scrollY > 800) { 
        headerDiv.classList.add("appear_background");
    } else {
        headerDiv.classList.remove("appear_background");
    }
  });
  