import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class PracticanteDto {
  @IsNumberString()
  @IsOptional()
  id: number;

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
  @IsString()
  cantidad_horas: string;
}
