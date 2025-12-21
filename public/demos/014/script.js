const container = document.querySelector('.ripple-container');

function createRipple(x, y) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  // ランダムなサイズと色
  const size = Math.random() * 100 + 100;
  ripple.style.width = size + 'px';
  ripple.style.height = size + 'px';

  const hue = Math.random() * 360;
  ripple.style.background = `radial-gradient(circle, hsla(${hue}, 100%, 80%, 0.6) 0%, transparent 70%)`;

  container.appendChild(ripple);

  // アニメーション終了後に削除
  setTimeout(() => {
    ripple.remove();
  }, 1500);
}

// クリックイベント
container.addEventListener('click', (e) => {
  createRipple(e.clientX, e.clientY);
});

// タッチイベント（モバイル対応）
container.addEventListener('touchstart', (e) => {
  e.preventDefault();
  Array.from(e.touches).forEach(touch => {
    createRipple(touch.clientX, touch.clientY);
  });
});
