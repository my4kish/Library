export class CreateAuthorDto {
  readonly name: string;
  readonly birthDate?: Date;
  readonly deathDate?: Date;
  readonly nationality?: string;
  readonly bio?: string;
  readonly photoUrl?: string;
  readonly books?: string[];
}
