// ページロード時にアニメーション開始
window.addEventListener('load', () => {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach((bar, index) => {
    setTimeout(() => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent + '%';
      bar.classList.add('active');
    }, index * 200);
  });
});

// クリックでリセット&再アニメーション
document.querySelector('.container').addEventListener('click', () => {
  const progressBars = document.querySelectorAll('.progress');

  // 一旦リセット
  progressBars.forEach(bar => {
    bar.style.width = '0%';
    bar.classList.remove('active');
  });

  // 再アニメーション
  setTimeout(() => {
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
        bar.classList.add('active');
      }, index * 200);
    });
  }, 100);
});
