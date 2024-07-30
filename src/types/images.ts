export type Image = {
  id: number;
  title: string;
  url: string;
  description: string;
  hash?: string;
};

export interface Images {
  images: Image[];
}
