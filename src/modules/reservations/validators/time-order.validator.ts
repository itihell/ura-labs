import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'timeOrderAndFormat', async: false })
export class TimeOrderAndFormatValidator
  implements ValidatorConstraintInterface
{
  validate(value: any, args: ValidationArguments) {
    const startTime = args.object[args.constraints[0]];
    const endTime = value;

    if (!startTime || !endTime) {
      return true; // Si alguna de las horas no está definida, la validación no es aplicable
    }

    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

    return (
      timePattern.test(startTime) &&
      timePattern.test(endTime) &&
      startTime < endTime
    );
  }

  defaultMessage(args: ValidationArguments) {
    return 'La hora de inicio y fin deben estar en formato HH:MM, y la hora de inicio debe ser anterior a la hora de fin.';
  }
}
