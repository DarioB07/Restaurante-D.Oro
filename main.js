const header = document.getElementById("header");

    window.addEventListener("scroll", function() {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });