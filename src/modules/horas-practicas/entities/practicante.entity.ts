import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('practicante')
export class Practicante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  carrera: string;

  @Column()
  fecha_inicio: string;

  @Column()
  fecha_fin: string;

  @Column()
  cantidad_horas: number;
}
