export interface ResourceItem {
  id: string;
  slug: string;
  imagePath: string;
  blurPath: string;
  title: string;
  shortDescription: string;
  types: [string];
  subresources: [ResourceItem];
  contactInfoEmail: string;
}
