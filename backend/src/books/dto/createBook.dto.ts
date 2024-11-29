export class CreateBookDto {
  readonly title: string;
  readonly authorIds: string[];
  readonly genres?: string[];
  readonly description?: string;
  readonly publicationDate?: Date;
  readonly isbn?: string;
  readonly language?: string;
  readonly pages?: number;
  readonly coverImageUrl?: string;
  readonly fileUrl?: string;
}
