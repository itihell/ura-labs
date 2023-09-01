import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class LaboratoryUseDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly className: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly academyArea: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  readonly career: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly teacher: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly modality: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly shift: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly year?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly semester: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly female: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly male: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly total: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly hours: string;

}

export class UseLabTypeDto extends PartialType(LaboratoryUseDto) { }
