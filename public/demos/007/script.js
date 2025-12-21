// BPM値のランダム変動エフェクト
const bpmValue = document.querySelector('.bpm-value');
let baseBPM = 72;

function updateBPM() {
  // 心拍のタイミングで少し値を変動させる
  const variation = Math.floor(Math.random() * 5) - 2; // -2 ~ +2
  const currentBPM = baseBPM + variation;
  bpmValue.textContent = currentBPM;
}

// 3秒ごとに更新（アニメーションサイクルと同期）
setInterval(updateBPM, 3000);

// ハートアイコンをクリックでBPM増加
const heartIcon = document.getElementById('heart-icon');
heartIcon.style.cursor = 'pointer';

heartIcon.addEventListener('click', () => {
  // BPMを一時的に上げる
  baseBPM = Math.min(baseBPM + 10, 120);
  bpmValue.textContent = baseBPM;

  // 5秒後に元に戻す
  setTimeout(() => {
    baseBPM = Math.max(baseBPM - 10, 60);
  }, 5000);

  // クリックエフェクト
  heartIcon.style.animation = 'none';
  setTimeout(() => {
    heartIcon.style.animation = 'heartbeat 3s ease-in-out infinite';
  }, 10);
});

// モニター画面のスキャンラインエフェクト（オプション）
const monitor = document.querySelector('.heart-monitor');
const scanLine = document.createElement('div');
scanLine.style.cssText = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to bottom, transparent, rgba(0, 255, 157, 0.3), transparent);
  animation: scan 4s linear infinite;
  pointer-events: none;
  z-index: 10;
`;

// スキャンラインアニメーションを追加
const style = document.createElement('style');
style.textContent = `
  @keyframes scan {
    0% {
      top: 0;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 100%;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
monitor.appendChild(scanLine);
