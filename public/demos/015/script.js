const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrolled * speed);
    layer.style.transform = `translateY(${yPos}px)`;
  });
});
