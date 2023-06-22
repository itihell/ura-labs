import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UsersDto {
  @IsNumber()
  @IsOptional()
  readonly id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  readonly password: string;
}
