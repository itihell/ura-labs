import { Area } from '../entities';

export class CreateCarreraDto {
  nombre: string;
  area: Area; // ID del área a la que pertenece la carrera
}
