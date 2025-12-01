import { ServiceItem, ProjectItem, SectionId } from './types';

export const NAV_LINKS = [
  { label: 'ホーム', href: `#${SectionId.HOME}` },
  { label: '私たちについて', href: `#${SectionId.ABOUT}` },
  { label: '事業内容', href: `#${SectionId.SERVICES}` },
  { label: '施工事例', href: `#${SectionId.PROJECTS}` },
  { label: 'お問い合わせ', href: `#${SectionId.CONTACT}` },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '噴水設計・デザイン',
    description: '場所の特性と文化的背景を融合させた、独創的な水景デザインをご提案します。',
    iconName: 'PenTool',
  },
  {
    id: 's2',
    title: '施工・エンジニアリング',
    description: '最新の技術と熟練の職人技により、安全で耐久性の高い施工を実現します。',
    iconName: 'Hammer',
  },
  {
    id: 's3',
    title: 'メンテナンス・管理',
    description: '長期的な美しさと安全性を維持するための、専門的な保守管理サービスを提供します。',
    iconName: 'Settings',
  },
  {
    id: 's4',
    title: 'ライトアップ演出',
    description: '夜景を彩る照明演出プログラムの作成と機器の選定を行います。',
    iconName: 'Lightbulb',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'みなとみらい 水の広場',
    location: '神奈川県 横浜市',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: '公共施設',
  },
  {
    id: 'p2',
    title: '六本木グランドタワー',
    location: '東京都 港区',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: '商業施設',
  },
  {
    id: 'p3',
    title: '京都 禅の庭園リノベーション',
    location: '京都府 京都市',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    category: '文化財',
  },
  {
    id: 'p4',
    title: '大阪ベイサイドショー',
    location: '大阪府 大阪市',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'エンターテインメント',
  },
  {
    id: 'p5',
    title: '札幌 雪と光の噴水',
    location: '北海道 札幌市',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    category: '公共施設',
  },
  {
    id: 'p6',
    title: '福岡 リゾートホテル',
    location: '福岡県 福岡市',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    category: 'ホテル',
  },
];