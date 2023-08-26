import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Area } from './area.entity';
import { LaboratoryUse } from 'src/modules/laboratory-use/entities';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Area, (area) => area.carreras)
  area: Area;

  @OneToMany(() => LaboratoryUse, (laboratoryUse) => laboratoryUse.carrera)
  laboratoryUse: LaboratoryUse[];

  carrera: Carrera[];
  

}
