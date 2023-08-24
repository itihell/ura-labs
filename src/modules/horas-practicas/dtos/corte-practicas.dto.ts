import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Practicante } from '../entities/practicante.entity';

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
}
