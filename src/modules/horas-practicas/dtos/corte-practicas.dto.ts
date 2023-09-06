import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Practicante } from '../entities/practicante.entity';

export class CortePracticasDto {
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
