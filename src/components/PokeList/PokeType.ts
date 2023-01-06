// 型定義
export type ITEM = {
  id: number;
  name: string;
  // image?: StaticImageData|string;
  image: string;
  type: string;
  weight: string;
  height: string;
  stats: number;
  statsName: string;
  onClick?: any;
  totalStats?: number;
};
