const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    
    
    
    
    
    const slider = document.getElementById("slider");
    const slides = slider.children;
    const total = slides.length;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 1;
    const size = 100; // % per slide

    // Initial position
    slider.style.transform = `translateX(-${size * index}%)`;

    // Move to next slide
    function moveToNext() {
      if (index >= total - 1) return;
      index++;
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(-${size * index}%)`;
    }

    // Move to previous slide
    function moveToPrev() {
      if (index <= 0) return;
      index--;
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(-${size * index}%)`;
    }

    // Loop logic after transition
    slider.addEventListener("transitionend", () => {
      // If on cloned last (index 0) → jump to real last
      if (index === 0) {
        slider.style.transition = "none";
        index = total - 2;
        slider.style.transform = `translateX(-${size * index}%)`;
      }

      // If on cloned first (index total-1) → jump to real first
      if (index === total - 1) {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(-${size * index}%)`;
      }
    });

    // Auto Slide
    function autoSlide() {
      moveToNext();
    }
    let slideInterval = setInterval(autoSlide, 4000);

    // Manual Controls

    prevBtn.addEventListener("click", () => {
      moveToPrev();
      resetTimer();
    });

    // Reset auto slide timer on manual click
    function resetTimer() {
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 4000);
    }

