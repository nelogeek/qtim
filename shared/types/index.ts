export interface IPostProps {
  id: string;
  title: string;
  image?: {
    url: string;
    title?: string;
  };
  description: string;
  preview: string;
  createdAt: string;
}

export interface IImageProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface IImagesResponseProps {
  data: IImageProps[];
}
