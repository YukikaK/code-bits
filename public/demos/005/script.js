const button = document.querySelector('.glow-button');

button.addEventListener('click', function(e) {
  // クリックアニメーションを追加
  button.classList.add('clicked');

  // アニメーション終了後にクラスを削除
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 600);

  // マウス位置に合わせて光のエフェクトを配置
  const glowEffect = button.querySelector('.glow-effect');
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glowEffect.style.left = x + 'px';
  glowEffect.style.top = y + 'px';
});

// ランダムに輝くエフェクトを追加（オプション）
setInterval(() => {
  button.style.boxShadow = `
    0 0 ${20 + Math.random() * 10}px rgba(0, 210, 255, 0.4),
    0 0 ${40 + Math.random() * 20}px rgba(58, 71, 213, 0.3)
  `;
}, 2000);
