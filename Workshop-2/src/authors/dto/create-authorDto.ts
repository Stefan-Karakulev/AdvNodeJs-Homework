import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  from: string;

  @IsDateString()
  birthDate: Date;
}