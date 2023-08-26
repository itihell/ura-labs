import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Carrera } from './carrera.entity';
import { LaboratoryUse } from 'src/modules/laboratory-use/entities';

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
