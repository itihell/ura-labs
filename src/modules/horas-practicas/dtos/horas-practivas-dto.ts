import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class HorasPracticasDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(100)
  readonly nombrePracticante: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(100)
  readonly carrera: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fecha_inicio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fecha_corte: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly horas_fecha_corte: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly horas_corte_anterior: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly horas_totales: number;

  @IsOptional()
  @ApiProperty()
  readonly culminado: boolean;
}
