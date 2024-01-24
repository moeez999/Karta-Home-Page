function toggleNav() {
  var navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("slider-dots");

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Display the selected slide
  slides[index].style.display = "block";

  // Update dots
  updateDots(index);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function updateDots(index) {
  // Clear existing dots
  dotsContainer.innerHTML = "";

  // Create dots and add to the container
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === index) {
      dot.classList.add("active");
    }
    dotsContainer.appendChild(dot);
  }
}

// Show the initial slide
showSlide(currentSlide);
