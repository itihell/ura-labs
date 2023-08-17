import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Area } from './area.entity';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Area, (area) => area.carreras)
  area: Area;

  carerra: Carrera[];
}
