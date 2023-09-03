import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LabEntity } from 'src/modules/lab-register/entities';
import { User } from 'src/modules/auth/entities/user.entity';
import { Carrera } from 'src/modules/registro-carreras/entities';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.reservations) // Agrega la relación con User
  userId: User;

  @ManyToOne(() => LabEntity, (lab) => lab.reservations)
  laboratory: LabEntity;

  @ManyToOne(() => Carrera, (carrera) => carrera.reservaciones)
  carrera: Carrera;

  @Column()
  date: Date;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column({ type: 'varchar', length: 20 }) // Agrega la columna para el turno
  shift: string; // Esta columna almacenará el turno

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
