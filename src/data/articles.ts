export interface Article {
  number: string;
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
}

export const articles: Article[] = [
  {
    number: '011',
    title: 'Neon Sign Effect',
    description: '点滅するレトロなネオンサインエフェクト',
    category: 'Text',
    date: '2025-01-21',
    slug: '011-neon-sign'
  },
  {
    number: '010',
    title: 'Wave Text',
    description: '各文字が波のように上下するテキストエフェクト',
    category: 'Text',
    date: '2025-01-21',
    slug: '010-wave-text'
  },
  {
    number: '009',
    title: 'Particle Network',
    description: 'マウスに反応する粒子が繋がるエフェクト',
    category: 'Background',
    date: '2025-01-21',
    slug: '009-particle-network'
  },
  {
    number: '008',
    title: 'Typing Effect',
    description: 'ターミナル風のタイピングエフェクト',
    category: 'Text',
    date: '2025-01-21',
    slug: '008-typing-effect'
  },
  {
    number: '007',
    title: 'Heart Beat Monitor',
    description: '心電図モニター風の心拍アニメーション',
    category: 'Animation',
    date: '2025-01-21',
    slug: '007-heart-beat'
  },
  {
    number: '006',
    title: 'Sparkle Cursor Trail',
    description: 'カーソルに追従するキラキラエフェクト',
    category: 'Animation',
    date: '2025-01-21',
    slug: '006-sparkle-cursor'
  },
  {
    number: '005',
    title: 'Glowing Button',
    description: 'クリックで光るインタラクティブなボタン',
    category: 'Button',
    date: '2025-01-21',
    slug: '005-glowing-button'
  },
  {
    number: '004',
    title: 'Social Cards',
    description: 'ホバーで展開するソーシャルメディアカード',
    category: 'Card',
    date: '2025-01-21',
    slug: '004-social-cards'
  },
  {
    number: '003',
    title: 'Flip Card',
    description: 'ホバーで裏返る3Dカードアニメーション',
    category: 'Card',
    date: '2025-01-17',
    slug: '003-flip-card'
  },
  {
    number: '002',
    title: 'Gradient Button',
    description: 'グラデーションが流れる美しいボタン',
    category: 'Button',
    date: '2025-01-16',
    slug: '002-gradient-button'
  },
  {
    number: '001',
    title: 'Loading Spinner',
    description: 'シンプルで美しいローディングアニメーション',
    category: 'Loading',
    date: '2025-01-15',
    slug: '001-loading-spinner'
  }
];
