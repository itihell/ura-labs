import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ModalidadesDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly nombreCarrera: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  readonly modalidad: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsOptional()
  readonly descripcion: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly turno: string;
}

export class ModalidadesPartialDto extends PartialType(ModalidadesDto) {}
