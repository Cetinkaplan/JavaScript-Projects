let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (if you add dots later)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Wrap around to the first slide
  if (n > slides.length) { slideIndex = 1 }

  // Wrap around to the last slide
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the active slide
  slides[slideIndex-1].style.display = "block";
}