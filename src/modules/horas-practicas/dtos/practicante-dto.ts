import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isBoolean,
} from 'class-validator';

export class PracticanteDto {
  @IsNumber()
  @IsOptional()
  id?: string;

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
