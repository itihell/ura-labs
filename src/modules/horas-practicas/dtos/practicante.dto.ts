import {
  IsNotEmpty,
  IsNumber,
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
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsNumber()
  @IsNotEmpty()
  carreraId: number;

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
