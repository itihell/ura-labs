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
  @IsOptional()
  readonly modalidad: string;
}

export class ModalidadesPartialDto extends PartialType(ModalidadesDto) {}
