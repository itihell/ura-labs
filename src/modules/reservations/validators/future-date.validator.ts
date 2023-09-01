import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'futureDate', async: false })
export class FutureDateValidator implements ValidatorConstraintInterface {
  validate(date: Date, args: ValidationArguments) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return date >= currentDate;
  }

  defaultMessage(args: ValidationArguments) {
    return 'La fecha debe ser una fecha futura.';
  }
}
