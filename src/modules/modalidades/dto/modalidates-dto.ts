import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class ModalidadesDto {
  @IsNumberString()
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  modalidad: string;
}
