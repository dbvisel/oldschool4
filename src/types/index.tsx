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
  phone?: string;
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
  dateAdded?: string;
  dateChanged?: string;
  link?: URL;
}

export interface EventRecord {
  id: string;
  title: string;
  time: string;
  location: string;
  description: string;
  link: URL;
  googleCalendarLink: URL;
}

export interface PersonRecord {
  id: string;
  name: string;
  type: "team" | "collaborator";
  image: Image;
  title: string;
  bio: string;
}
