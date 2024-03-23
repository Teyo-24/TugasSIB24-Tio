// menggunakan dom untuk membuat carousel
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide-dom');
    let slide2 = 0;
  
    function showSlides() {
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slide2++;
        if (slide2 > slides.length) { slide2 = 1 }
        slides[slide2 - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik
    }
  
    showSlides();
  });
