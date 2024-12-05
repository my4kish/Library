export class CreateReadingStatusDto {
  readonly userId: string;
  readonly bookId: string;
  readonly status: 'reading' | 'completed' | 'wantToRead';
}
