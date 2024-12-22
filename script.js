const menuOpenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

   //close menu when the close button is clicked
   menucloseButton.addEventListener("click", () => menuOpenButton.click());


  // Select all elements with the class "animate"
const animateElements = document.querySelectorAll('.animate');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.section) {
      entry.target.classList.add('visible'); // Add "visible" class when in viewport
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each animate element
animateElements.forEach(el => observer.observe(el));