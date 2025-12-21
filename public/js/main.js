/**
 * main.js - 共通機能
 */

// モバイルメニュートグル
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// スクロール時のヘッダー処理
const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }

  lastScrollY = currentScrollY;
});

// フィルター機能（トップページ用）
const filterButtons = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // アクティブ状態の切り替え
    filterButtons.forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    // フィルタリング
    const filter = button.dataset.filter;

    articleCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
        card.classList.remove('fade-in');
      }
    });
  });
});
