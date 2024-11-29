export class UpdateReviewDto {
  readonly bookId: string;
  readonly userId: string;
  readonly rating: number;
  readonly comment: string;
}
