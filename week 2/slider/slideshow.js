// Initialize Swiper with Autoplay
var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: { shadow: true, translate: [0, 0, -400] },
      next: { translate: ["100%", 0, 0] }
    },
    autoplay: {
      delay: 2000, // 2 seconds delay
      disableOnInteraction: false, // Keeps autoplay after interactions
    }
  });
  
  // Custom JavaScript for Image Slider
  var imgs = document.querySelectorAll('.slider img');
  var dots = document.querySelectorAll('.dot');
  var currentImg = 0;
  const interval = 2000; // 2 seconds interval
  
  // Initial setup
  imgs.forEach((img, index) => {
    img.style.opacity = index === 0 ? 1 : 0; // Show the first image
  });
  
  function changeSlide(n) {
    // Reset all images and dots
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      dots[i].classList.remove('active');
    }
  
    // Show the current image and activate dot
    if (n !== undefined) currentImg = n;
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].classList.add('active');
  
    // Move to the next image
    currentImg = (currentImg + 1) % imgs.length;
  }
  
  var timer = setInterval(changeSlide, interval);
  
  function changeimage(n) {
    clearInterval(timer);
    changeSlide(n);
    timer = setInterval(changeSlide, interval);
  }
  