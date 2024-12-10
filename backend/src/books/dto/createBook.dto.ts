export class CreateBookDto {
  readonly title: string;
  readonly authorId: string;
  readonly genres?: string[];
  readonly description?: string;
  readonly publicationDate?: Date;
  readonly language?: string;
  readonly pages?: number;
  readonly coverImageUrl?: string;
  readonly fileUrl?: string;
}
