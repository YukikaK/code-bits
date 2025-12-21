// カスタムカーソル作成
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// グロー効果作成
const glow = document.createElement('div');
glow.classList.add('glow');
document.body.appendChild(glow);

// マウス位置を追跡
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let glowX = 0;
let glowY = 0;

// キラキラ生成の制御
let lastSparkleTime = 0;
const sparkleInterval = 50; // ミリ秒

// マウス移動イベント
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // 一定間隔でキラキラを生成
  const currentTime = Date.now();
  if (currentTime - lastSparkleTime > sparkleInterval) {
    createSparkle(mouseX, mouseY);
    lastSparkleTime = currentTime;
  }
});

// タッチ移動イベント（モバイル対応）
document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  mouseX = touch.clientX;
  mouseY = touch.clientY;

  // 一定間隔でキラキラを生成
  const currentTime = Date.now();
  if (currentTime - lastSparkleTime > sparkleInterval) {
    createSparkle(mouseX, mouseY);
    lastSparkleTime = currentTime;
  }

  // グロー位置を更新
  glowX = touch.clientX;
  glowY = touch.clientY;
});

// スムーズなカーソル追従アニメーション
function animateCursor() {
  // カーソルの遅延追従（イージング）
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  // グローのさらに遅い追従
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  glow.style.left = (glowX - 100) + 'px';
  glow.style.top = (glowY - 100) + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

// キラキラパーティクル生成
function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  // ランダムな位置のオフセット
  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;

  sparkle.style.left = (x + offsetX) + 'px';
  sparkle.style.top = (y + offsetY) + 'px';

  // ランダムなサイズ
  const scale = 0.5 + Math.random() * 0.5;
  sparkle.style.transform = `scale(${scale})`;

  // ランダムな色相
  const hue = Math.random() * 60 + 30; // 黄色〜オレンジ系
  sparkle.style.filter = `hue-rotate(${hue}deg)`;

  document.body.appendChild(sparkle);

  // アニメーション終了後に削除
  setTimeout(() => {
    sparkle.remove();
  }, 800);
}

// クリック時の特別なエフェクト
document.addEventListener('click', (e) => {
  // 一度に複数のキラキラを生成
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createSparkle(e.clientX, e.clientY);
    }, i * 30);
  }

  // カーソルのスケールアニメーション
  cursor.style.transform = 'scale(1.5)';
  setTimeout(() => {
    cursor.style.transform = 'scale(1)';
  }, 200);
});

// タッチ開始時のエフェクト（モバイル対応）
document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  // 一度に複数のキラキラを生成
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createSparkle(touch.clientX, touch.clientY);
    }, i * 30);
  }
});

// マウスが画面外に出たときの処理
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  glow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  glow.style.opacity = '1';
});
