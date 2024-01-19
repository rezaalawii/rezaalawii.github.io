(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 200, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });

    $(".porto").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });

    const contactForm = document.getElementById("contact-form");
    const loader =document.querySelector(".loader");
    
    loader.style.display = "none";

    contactForm.addEventListener("submit", function (e) {
        loader.style.display = "block";
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url,{
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
       .then(() =>{
        //url thank you
        loader.style.display = "none";
        window.location.href="/thankyou.html";
       })
       .catch((e) => alert("Error Occured"));
    });


    
  document.addEventListener("DOMContentLoaded", function() {
    const featureSection = document.getElementById("feature");
    const toggleButton = document.getElementById("toggleButton");

    
    toggleButton.addEventListener("click", function() {
      if (featureSection.style.display === "none") {
        featureSection.style.display = "block";
      } else {
        featureSection.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
      toggleButton.classList.toggle("active");
      // Tambahkan aksi lain yang diinginkan saat tombol diaktifkan/dinonaktifkan di sini
    });
  });

  


})(jQuery);


