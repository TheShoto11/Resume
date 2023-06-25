var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

// Function to display the current slide
function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the 'active' class from all dots
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Function to navigate to the previous slide
function prevSlide() {
  showSlide(slideIndex - 1);
}

// Function to navigate to the next slide
function nextSlide() {
  showSlide(slideIndex + 1);
}

// Event listeners for dot clicks and keyboard arrow keys
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    var dotIndex = Array.prototype.indexOf.call(dots, this);
    showSlide(dotIndex);
  });
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode === 37) {
    // Left arrow key
    prevSlide();
  } else if (e.keyCode === 39) {
    // Right arrow key
    nextSlide();
  }
});

// Display the initial slide
showSlide(slideIndex);
