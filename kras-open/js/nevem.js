let slideIndex = 0;
showSlides();



function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");


    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
   


    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
    setTimeout(showSlides, 4000);
}


function scrollToImage(imageId) {
    const imageElement = document.getElementById(imageId);
    imageElement.scrollIntoView({
      behavior: 'smooth',  // Smooth scrolling
      block: 'center',     // Vertical alignment in the center of the viewport
      inline: 'center'     // Horizontal alignment in the center (if needed)
    });
  }

  function scrollToText(TextId) {
    const textElement = document.getElementById(textId);
    textElement.scrollIntoView({
      behavior: 'smooth',  // Smooth scrolling
      block: 'center',     // Vertical alignment in the center of the viewport
      inline: 'center'     // Horizontal alignment in the center (if needed)
    });
  }