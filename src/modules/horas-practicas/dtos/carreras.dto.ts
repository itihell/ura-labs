import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CarrerasDto {
  @IsNumber()
  @IsOptional()
  readonly id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
