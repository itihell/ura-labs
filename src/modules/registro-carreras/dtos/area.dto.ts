import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAreaDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nombre: string;
}
