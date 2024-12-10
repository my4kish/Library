export interface Books {
  _id: string;
  title: string;
  authorId: string;
  genres?: string[];
  description?: string;
  publicationDate?: Date;
  language?: string;
  pages?: number;
  coverImageUrl?: string;
  // fileUrl?: string;
}