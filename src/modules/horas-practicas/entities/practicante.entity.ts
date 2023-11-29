import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('practicante')
export class Practicante {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int4',
  })
  id?: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  carrera: string;

  @Column()
  fecha_inicio: string;

  @Column()
  fecha_fin: string;

  @Column()
  cantidad_horas: string;
}
