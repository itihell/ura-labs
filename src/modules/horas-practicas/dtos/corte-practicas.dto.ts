import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CortePracticasDto {
  @IsNumber()
  @IsNotEmpty()
  practicanteId: number;

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
  @IsOptional()
  horas_totales: number;
}
