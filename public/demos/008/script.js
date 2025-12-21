const typedTextElement = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const textArray = [
  'Hello, World!',
  'Welcome to Code Bits',
  'I love coding...',
  'HTML CSS JavaScript'
];

let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
  const currentText = textArray[textArrayIndex];

  if (!isDeleting) {
    // タイピング中
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      // テキスト完成、待機後に削除開始
      isDeleting = true;
      setTimeout(type, newTextDelay);
      return;
    }
  } else {
    // 削除中
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // 削除完了、次のテキストへ
      isDeleting = false;
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
    }
  }

  const delay = isDeleting ? erasingDelay : typingDelay;
  setTimeout(type, delay);
}

// 開始
setTimeout(type, 1000);

// クリックでアニメーション速度変更
const terminal = document.querySelector('.terminal');
terminal.addEventListener('click', () => {
  if (typingDelay === 100) {
    typingDelay = 50;
    erasingDelay = 25;
  } else {
    typingDelay = 100;
    erasingDelay = 50;
  }
});
