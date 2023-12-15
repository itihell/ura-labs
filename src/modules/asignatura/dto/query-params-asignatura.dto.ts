import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryParamsAsignaturaDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;
}
