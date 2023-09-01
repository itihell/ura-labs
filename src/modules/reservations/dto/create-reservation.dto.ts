import { IsNotEmpty, IsDateString, IsEnum, Validate } from 'class-validator';
import { Shift } from '../entities/reservation.entity'; // Asegúrate de importar el enum Shift
import { TimeOrderAndFormatValidator } from '../validators/time-order.validator'; // Importa el validador personalizado

export class CreateReservationDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  courseId: number;

  @IsNotEmpty()
  groupId: number;

  @IsDateString()
  date: Date;

  @IsEnum(Shift)
  shift: Shift;

  @Validate(TimeOrderAndFormatValidator, ['startTime']) // Validación de formato y orden de tiempo
  startTime: string;

  @Validate(TimeOrderAndFormatValidator, ['startTime']) // Validación de formato y orden de tiempo
  endTime: string;
}
