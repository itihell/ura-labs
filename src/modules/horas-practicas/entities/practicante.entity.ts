import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CortePracticas } from './corte-practicas.entity';

@Entity('practicante')
export class Practicante {
  @PrimaryGeneratedColumn({ name: 'id_practicante', type: 'int4' })
  id?: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ name: 'carrera', type: 'varchar', length: 100, nullable: false })
  carrera: string;

  @Column({
    name: 'fecha_inicio',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  fecha_inicio: string;
  @Column({ name: 'fecha_fin', type: 'varchar', length: 100, nullable: false })
  fecha_fin: string;

  @Column({ name: 'cantidad_horas', type: 'int', nullable: false, default: 0 })
  cantidad_horas: number;

  @Column({ name: 'estado', type: 'boolean', nullable: false, default: true })
  estado: boolean;

  @JoinTable()
  @ManyToMany(
    () => CortePracticas,
    (corte_practicas) => corte_practicas.practicante,
  )
  corte_practicas?: CortePracticas[];
}
