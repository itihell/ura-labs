import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Area } from './area.entity';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Area, (area) => area.carreras)
  area: Area;

  carerra: Carrera[];

  @OneToMany(() => Reservation, (reservation) => reservation.carrera)
  reservaciones: Reservation[];
}
