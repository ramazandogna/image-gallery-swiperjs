export type Image = {
  id: number;
  title: string;
  url: string;
  description: string;
};

export interface Images {
  images: Image[];
}
