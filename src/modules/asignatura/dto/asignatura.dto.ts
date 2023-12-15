import {
    IsNotEmpty,
    IsNumber,
    IsNumberString,
    IsOptional,
    IsString,
    MaxLength,
  } from 'class-validator';
  
  export class CreateAsignaturaDto {
    @IsOptional()
    @IsNumber()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    nombre: string;

  }
  