import {
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class RoleDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  role: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
