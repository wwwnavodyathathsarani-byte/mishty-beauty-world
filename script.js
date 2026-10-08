```javascript
// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you! Your message has been received. We will contact you soon.");

        this.reset();
    });
}


// ================= GALLERY LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeButton = document.querySelector(".close-lightbox");

galleryImages.forEach(function(image) {

    image.onclick = function() {

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;

    };

});


closeButton.onclick = function() {

    lightbox.style.display = "none";

};


lightbox.onclick = function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

};
```
