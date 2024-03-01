interface Image {
  path: string;
  blurPath: string;
  alt: string;
  width: number;
  height: number;
}

interface ContactInfo {
  email?: string;
  link?: string;
  location?: string;
}

export interface ResourceItem {
  id: string;
  slug: string;
  image: Image;
  title?: string;
  description?: string;
  shortDescription?: string;
  types?: [string];
  subresources?: [ResourceItem];
  contactInfo?: ContactInfo;
  link?: URL;
}
