// 型定義
export type ITEM = {
  id: number;
  name: string;
  // image?: StaticImageData|string;
  image: string;
  type: string;
  weight: number;
  height: number;
  stats: any;
  statsName: any;
  onClick?: any;
  totalStats?: number;
};
