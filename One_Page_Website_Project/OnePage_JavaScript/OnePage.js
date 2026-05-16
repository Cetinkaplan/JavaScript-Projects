// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main function to manage and display the correct image
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");

  // If index exceeds total slides, loop back to the first
  if (n > slides.length) { slideIndex = 1 }

  // If index is less than 1, loop to the last slide
  if (n < 1) { slideIndex = slides.length }

  // Hide all large slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the active slide
  slides[slideIndex - 1].style.display = "block";
}