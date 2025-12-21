/**
 * article.js - 記事ページ機能
 */

// ===========================
// コピー機能
// ===========================
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const targetId = button.dataset.target;
    const codeElement = document.getElementById(targetId);

    if (!codeElement) return;

    const code = codeElement.textContent;

    try {
      await navigator.clipboard.writeText(code);

      // ボタンの状態を変更
      const copyText = button.querySelector('.copy-text');
      const originalText = copyText.textContent;

      button.classList.add('is-copied');
      copyText.textContent = 'Copied!';

      // 2秒後に元に戻す
      setTimeout(() => {
        button.classList.remove('is-copied');
        copyText.textContent = originalText;
      }, 2000);

    } catch (err) {
      console.error('コピーに失敗しました:', err);
      alert('コピーに失敗しました。手動でコピーしてください。');
    }
  });
});

// ===========================
// ZIPダウンロード機能
// ===========================
const downloadBtn = document.getElementById('downloadBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', async () => {
    const htmlCode = document.getElementById('htmlCode')?.textContent || '';
    const cssCode = document.getElementById('cssCode')?.textContent || '';
    const jsCode = document.getElementById('jsCode')?.textContent || '';

    // 記事番号を取得（URLから）
    const pathParts = window.location.pathname.split('/');
    const fileName = pathParts[pathParts.length - 1].replace('.html', '');

    // JSZipでZIP作成
    const zip = new JSZip();

    zip.file('index.html', htmlCode);
    zip.file('style.css', cssCode);

    // JSがあれば追加
    if (jsCode.trim()) {
      zip.file('script.js', jsCode);
    }

    // READMEを追加
    const readme = `# ${fileName}

Code Bits - https://code-bits.jp/

## ファイル構成
- index.html: HTML構造
- style.css: スタイル
${jsCode.trim() ? '- script.js: JavaScript\n' : ''}
## 使い方
1. ファイルをプロジェクトにコピー
2. 必要に応じてカスタマイズ

---
© 2025 Code Bits
`;

    zip.file('README.md', readme);

    // ZIP生成してダウンロード
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `code-bits-${fileName}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('ダウンロードに失敗しました:', err);
      alert('ダウンロードに失敗しました。');
    }
  });
}

// ===========================
// フルスクリーン機能
// ===========================
const fullscreenBtn = document.getElementById('fullscreenBtn');
const demoFrame = document.getElementById('demoFrame');

if (fullscreenBtn && demoFrame) {
  fullscreenBtn.addEventListener('click', () => {
    if (demoFrame.requestFullscreen) {
      demoFrame.requestFullscreen();
    } else if (demoFrame.webkitRequestFullscreen) {
      demoFrame.webkitRequestFullscreen();
    } else if (demoFrame.msRequestFullscreen) {
      demoFrame.msRequestFullscreen();
    }
  });
}
