(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener(
      'submit',
      event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
//Landing Page Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Counter Animation
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current);
          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  }

  // Intersection Observer for counter animation
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsSection);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Add scroll effect to navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(248, 249, 250, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.backgroundColor = '#f8f9fa';
        navbar.style.backdropFilter = 'none';
      }
    });
  }

  // Parallax effect for hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }

  // Add loading animation to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (!this.classList.contains('loading')) {
        this.classList.add('loading');
        setTimeout(() => {
          this.classList.remove('loading');
        }, 2000);
      }
    });
  });
});


let taxToggle = document.getElementById("flexSwitchCheckDefault");
taxToggle.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
})

// Enhanced scroll functionality with smooth animations
const filterWrapper = document.getElementById("filter-wrapper");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

// Smooth scroll with easing animation
function smoothScrollTo(element, targetScrollLeft, duration = 300) {
  const startScrollLeft = element.scrollLeft;
  const distance = targetScrollLeft - startScrollLeft;
  const startTime = performance.now();

  function animation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smooth animation
    const easeInOutCubic = progress < 0.5
      ? 4 * progress * progress * progress
      : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

    element.scrollLeft = startScrollLeft + distance * easeInOutCubic;

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

scrollLeftBtn.addEventListener("click", () => {
  const scrollAmount = 150; // Smaller scroll for better control
  const targetScroll = Math.max(0, filterWrapper.scrollLeft - scrollAmount);
  smoothScrollTo(filterWrapper, targetScroll);
});

scrollRightBtn.addEventListener("click", () => {
  const scrollAmount = 150;
  const maxScroll = filterWrapper.scrollWidth - filterWrapper.clientWidth;
  const targetScroll = Math.min(maxScroll, filterWrapper.scrollLeft + scrollAmount);
  smoothScrollTo(filterWrapper, targetScroll);
});