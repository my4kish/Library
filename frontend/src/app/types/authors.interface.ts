export interface Authors {
  _id:string;
  name: string;
  birthDate?: Date;
  deathDate?: Date;
  nationality?: string;
  bio?: string;
  photoUrl?: string;
  books?: string[];
}