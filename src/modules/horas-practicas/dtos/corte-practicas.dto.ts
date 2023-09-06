import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CortePracticasDto {
  @IsString()
  @IsNotEmpty()
  practicante: string;

  @IsString()
  @IsNotEmpty()
  fecha_corte: string;

  @IsNumber()
  @IsOptional()
  horas_actuales: number;

  @IsNumber()
  @IsNotEmpty()
  horas_anteriores: number;

  @IsNumber()
  @IsNotEmpty()
  horas_totales: number;

  @IsOptional()
  culminado: boolean;
}
