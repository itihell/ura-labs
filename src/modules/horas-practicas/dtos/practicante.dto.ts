import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PracticanteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  carrera: string;

  @IsNotEmpty()
  @IsString()
  fecha_inicio: string;

  @IsNotEmpty()
  @IsString()
  fecha_fin: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad_horas: number;

  @IsNotEmpty()
  @IsBoolean()
  estado: boolean;
}
