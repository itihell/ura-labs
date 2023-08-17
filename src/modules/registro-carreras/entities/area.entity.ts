import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carrera } from './carrera.entity';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Carrera, (carrera) => carrera.area)
  carreras: Carrera[];

  area: Area[];
}
