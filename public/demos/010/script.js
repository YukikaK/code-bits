const waveText = document.querySelector('.wave-text');
const text = waveText.getAttribute('data-text');

// テキストを文字ごとに分割してspanで囲む
waveText.innerHTML = '';
text.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = `${index * 0.1}s`;
  waveText.appendChild(span);
});

// ホバーでアニメーション再開
waveText.addEventListener('mouseenter', () => {
  const spans = waveText.querySelectorAll('span');
  spans.forEach((span, index) => {
    span.style.animation = 'none';
    setTimeout(() => {
      span.style.animation = 'wave 1.5s ease-in-out infinite, gradient 3s ease infinite';
      span.style.animationDelay = `${index * 0.05}s`;
    }, 10);
  });
});
