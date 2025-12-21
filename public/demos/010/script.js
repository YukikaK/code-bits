const morphShape = document.getElementById('morphShape');
const shapeName = document.querySelector('.shape-name');

const shapes = [
  {
    name: 'Circle',
    path: 'M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50'
  },
  {
    name: 'Square',
    path: 'M50,50 L150,50 L150,150 L50,150 Z'
  },
  {
    name: 'Triangle',
    path: 'M100,50 L150,150 L50,150 Z'
  },
  {
    name: 'Star',
    path: 'M100,40 L110,80 L150,80 L120,105 L130,145 L100,120 L70,145 L80,105 L50,80 L90,80 Z'
  },
  {
    name: 'Heart',
    path: 'M100,140 C100,140 50,110 50,80 C50,60 65,50 80,50 C90,50 100,60 100,60 C100,60 110,50 120,50 C135,50 150,60 150,80 C150,110 100,140 100,140 Z'
  }
];

let currentIndex = 0;

function morphToNext() {
  currentIndex = (currentIndex + 1) % shapes.length;
  morphShape.setAttribute('d', shapes[currentIndex].path);
  shapeName.textContent = shapes[currentIndex].name;
}

// 初期形状
morphShape.setAttribute('d', shapes[0].path);
shapeName.textContent = shapes[0].name;

// 自動変形
setInterval(morphToNext, 3000);

// クリックで次の形状へ
document.querySelector('.container').addEventListener('click', morphToNext);
