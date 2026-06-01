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
  isNew?: boolean;
  hideTitle?: boolean;
  language?: string;
  description?: string;
  shortDescription?: string;
  types?: string[];
  subresources?: ResourceItem[];
  contactInfo?: ContactInfo;
  dateAdded?: string;
  dateChanged?: string;
  link?: string;
  photoOnResourceCardOnly?: boolean;
}

export interface EventRecord {
  id: string;
  title: string;
  time: string;
  startTime: string;
  endTime: string;
  isAllDay: boolean;
  location: string;
  description: string;
  link: string;
  googleCalendarLink: string;
}

export interface PersonRecord {
  id: string;
  name: string;
  type: "team" | "collaborator" | "Fellow";
  image: Image;
  title: string;
  bio: string;
  website: string;
}

/** Raw record as returned by the Airtable SDK. */
export interface AirtableRecord {
  id: string;
  fields: Record<string, any>;
  imagePath?: string;
  imageWidth?: number;
  imageHeight?: number;
  blurPath?: string;
}

/**
 * Flattened resource from getResourcesOfType / getNewResources —
 * the result of spreading `...record.fields` with `id` and `imagePath` merged in.
 */
export interface FlatAirtableResource {
  id: string;
  imagePath?: string;
  blurPath?: string;
  imageWidth?: number;
  imageHeight?: number;
  Title?: string;
  Alphabetize?: string;
  Slug?: string;
  [key: string]: any;
}

export interface QuoteRecord {
  id: string;
  fields: {
    Quote: string;
    Quoter: string;
    Credential?: string;
    Offering?: string[];
  };
}

/** A navigation/listing entry for a category or collection. */
export interface CategoryType {
  id: string;
  name: string;
  tag?: string;
}

export interface CategoryPageData {
  slug: string;
  resources: ResourceItem[];
  corpus: string[];
  seoTitle: string;
  seoDescription: string;
  description: string;
}

export interface CollectionPageData {
  slug: string;
  resources: ResourceItem[];
  corpus: string[];
  title: string;
  description: string;
}

export interface LanguageGroup {
  language: string;
  count: number;
  resources: ResourceItem[];
}

/** Shape of a hit object from the Algolia index. */
export interface AlgoliaHit {
  objectID: string;
  id?: string;
  resultType?: string;
  title?: string;
  description?: string;
  slug?: string;
  Title?: string;
  Types?: string[];
  ShowOnFrontPage?: boolean;
  hideTitle?: boolean;
  "Short_Description"?: string;
  "Resource_URL"?: string;
  image?: {
    id: string;
    extension: string;
    width: number;
    height: number;
  };
}
