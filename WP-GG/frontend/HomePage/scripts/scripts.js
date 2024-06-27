// JavaScript for letter-by-letter typing effect
// Select the element containing the text to animate
const accrTaste = document.getElementById('accr-taste');
if(accrTaste !== null){
const text = accrTaste.textContent;
accrTaste.textContent = ''; // Clear original text

// Start the typing animation
typeWriter(text, 0);
}
// Function to add text letter by letter with a delay
function typeWriter(text, i) {
    if (i < text.length) {
        accrTaste.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 100); // Adjust the delay (in milliseconds) between each character
    }
}


//
  // دکمه اسکرول به بالا
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // نمایش یا مخفی کردن دکمه براساس اسکرول
  window.onscroll = function() {
      toggleScrollTopBtn();
  };

  function toggleScrollTopBtn() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          scrollTopBtn.style.display = "block";
          console.log("kk");
      } else {
        console.log("ll");
          scrollTopBtn.style.display = "none";
      }
  }

  // اسکرول به بالای صفحه با کلیک روی دکمه
  scrollTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

///////
  // برای قسمت اسلاید بار

window.onload = function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Define the functions
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    // Expose functions to global scope
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide; };

 ////////////////////////

 