// Get the modal elements
const aboutModal = document.getElementById("about-modal");
const contactModal = document.getElementById("contact-modal");
const reviewsModal = document.getElementById("reviews-modal");
const faqModal = document.getElementById("faq-modal");

// Get the links that open the modals
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const reviewsLink = document.getElementById("reviews-link");
const faqLink = document.getElementById("faq-link");

// Get the close buttons
const closeButtons = document.querySelectorAll(".close");

// Open About Modal
aboutLink.addEventListener("click", () => {
  aboutModal.style.display = "block";
});

// Open Contact Modal
contactLink.addEventListener("click", () => {
  contactModal.style.display = "block";
});

// Open Reviews Modal
reviewsLink.addEventListener("click", () => {
  reviewsModal.style.display = "block";
});

// Open FAQ Modal
faqLink.addEventListener("click", () => {
  faqModal.style.display = "block";
});

// Close Modals
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    aboutModal.style.display = "none";
    contactModal.style.display = "none";
    reviewsModal.style.display = "none";
    faqModal.style.display = "none";
  });
});

// Close Modal if user clicks outside the modal
window.addEventListener("click", (event) => {
  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target === reviewsModal) {
    reviewsModal.style.display = "none";
  }
  if (event.target === faqModal) {
    faqModal.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const photosTabButton = document.querySelector(".photos-tab-button");
    const dropdownContent = document.querySelector(".dropdown-content");
    const locationDropdown = document.getElementById("location-dropdown");
    const photoAlbum = document.getElementById("photo-album");
  
    // Show dropdown when Photos tab is clicked
    photosTabButton.addEventListener("click", function () {
      dropdownContent.style.display = "block";
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".photos-tab")) {
        dropdownContent.style.display = "none";
      }
    });
  
    // Show photo album when a location is selected
    locationDropdown.addEventListener("change", function () {
      const selectedLocation = locationDropdown.value;
      if (selectedLocation) {
        photoAlbum.innerHTML = ""; // Clear previous photos
        for (let i = 1; i <= 10; i++) {
          const img = document.createElement("img");
          img.src = `images/${selectedLocation}/${i}.jpg`; // Adjust path as needed
          img.alt = `Photo ${i} of ${selectedLocation}`;
          photoAlbum.appendChild(img);
        }
        photoAlbum.style.display = "flex";
      } else {
        photoAlbum.style.display = "none";
      }
    });
  });