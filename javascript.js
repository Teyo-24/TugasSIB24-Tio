// // alert("hallo javascript")
// let slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

// menggunakan dom untuk membuat carousel
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  let slideIndex = 0;

  function showSlides() {
      slides.forEach(slide => {
          slide.style.display = "none";
      });
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik
  }

  showSlides();
});
