let slideIndex = [1, 1]; // Array to hold the current slide index for each slideshow
let slideId = ["slideshow-reu", "slideshow-utr"]; // IDs for each slideshow

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let slides = document.querySelectorAll(`#${slideId[no]} .slide`);

    if (n > slides.length) {
        slideIndex[no] = 1;
    }
    
    if (n < 1) {
        slideIndex[no] = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex[no] - 1].style.display = "block";
}
