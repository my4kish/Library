export class UpdateReadingStatusDto {
  readonly userId: string;
  readonly bookId: string;
  readonly status: 'reading' | 'completed' | 'wantToRead';
}
