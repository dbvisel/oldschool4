export interface ResourceItem {
  id: string;
  slug: string;
  imagePath?: string;
  blurPath?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  description?: string;
  shortDescription?: string;
  types?: [string];
  subresources?: [ResourceItem?];
  contactInfoEmail?: string;
  link?: URL;
}
