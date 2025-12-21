// クリックで点滅パターン変更
const neonTexts = document.querySelectorAll('.neon-text');

document.querySelector('.neon-sign').addEventListener('click', () => {
  neonTexts.forEach(text => {
    text.style.animation = 'none';
    setTimeout(() => {
      const randomDuration = 1 + Math.random() * 3;
      text.style.animation = `flicker ${randomDuration}s infinite alternate`;
    }, 10);
  });
});
