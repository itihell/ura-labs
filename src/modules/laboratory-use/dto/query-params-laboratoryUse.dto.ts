import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MaxLength } from 'class-validator';
import { Docentes } from 'src/modules/Docentes/entities/docentes.entity';
import { Asignatura } from 'src/modules/asignatura/entities/asignatura.entity';
import { LabEntity } from 'src/modules/lab-register/entities';
import { Modalidades } from 'src/modules/modalidades/entities/modalidades-entities';
import { Carrera } from 'src/modules/registro-carreras/entities';

export class QueryParamsUsoLabDto {
  @IsNotEmpty()
  @IsNumber()
  readonly className: number;

  @IsOptional()
  @IsString()
  readonly is_active?: string;
}
