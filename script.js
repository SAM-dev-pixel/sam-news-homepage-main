// when burger button clicked on smaller screen
((burgerBtn, navLinks)=> {
    burgerBtn.addEventListener("click", ()=> {
        // add class active to show nav links
        navLinks.classList.toggle("active");
        // if nav links has class active, the the page can't be scroll and show nav links
        (navLinks.classList.contains("active")) ? (burgerBtn.src = "assets/images/icon-menu-close.svg", document.body.classList.add("unactive")) : (burgerBtn.src = "assets/images/icon-menu.svg", document.body.classList.remove("unactive"));

    });
})(document.querySelector(".burger-btn"), document.querySelector(".nav-links"));
// show background nav links while page scrolled
((header)=> {
  window.addEventListener("scroll", ()=> {

    
    (scrollY > 80) ? header.classList.add("active") : header.classList.remove("active");

  });
})(document.getElementById("header"));

