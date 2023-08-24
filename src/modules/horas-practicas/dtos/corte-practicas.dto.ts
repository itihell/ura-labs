import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CortePracticasDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  fecha_corte: string;

  @IsNumber()
  @IsNotEmpty()
  horas_actuales: number;
  @IsNumber()
  @IsNotEmpty()
  horas_anteriores: number;

  @IsNumber()
  @IsNotEmpty()
  horas_totales: number;

  @IsOptional()
  culminado: boolean;

  @IsArray({ always: true })
  @IsString({ each: true })
  @IsOptional()
  practicante: string[];
}
