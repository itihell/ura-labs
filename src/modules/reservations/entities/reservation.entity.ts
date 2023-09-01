import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

import { LabEntity } from 'src/modules/lab-register/entities/index';
import { IsNotEmpty, IsDateString, Validate, IsEnum } from 'class-validator'; // Agregamos IsEnum
import { FutureDateValidator } from '../validators/future-date.validator';
import { TimeOrderAndFormatValidator } from '../validators/time-order.validator'; // Importa el validador personalizado

// Define el enum Shift
export enum Shift {
  morning = 'morning',
  afternoon = 'afternoon',
  night = 'night',
}

@Entity()
@Unique(['laboratory', 'date', 'shift', 'startTime', 'endTime'])
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LabEntity, (laboratory) => laboratory.reservations)
  laboratory: LabEntity;

  @Column()
  @IsNotEmpty()
  userId: number;

  @Column()
  @IsNotEmpty()
  courseId: number;

  @Column()
  @IsNotEmpty()
  groupId: number;

  @Column({ type: 'date' })
  @IsDateString()
  @Validate(FutureDateValidator)
  date: Date;

  @Column({ type: 'enum', enum: Shift }) // Usamos el enum Shift aquí
  @IsEnum(Shift) // Validamos que el valor esté en el enum Shift
  shift: Shift;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  @Validate(TimeOrderAndFormatValidator, ['startTime']) // Aplica el validador personalizado y pasa el nombre del campo de inicio
  endTime: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
