// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission (demo)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('送信ありがとうございます。\n後ほど担当者よりご連絡させていただきます。');
  e.target.reset();
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }

  lastScroll = currentScroll;
});

// Glowing button effect (from #005)
document.querySelectorAll('.glowing-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'ripple 0.6s ease-out';

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
