import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'horas_practicas' })
export class HorasPracticas {
  @PrimaryGeneratedColumn({ name: 'id_horas_practicas', type: 'int4' })
  id?: number;

  @Column({
    name: 'nombrePracticante',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  nombrePracticante: string;

  @Column({ name: 'carrera', type: 'varchar', length: 100, nullable: false })
  carrera: string;
  @Column({
    name: 'fecha_inicio',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  fecha_inicio: string;

  @Column({
    name: 'fecha_corte',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  fecha_corte: string;

  @Column({
    name: 'horas_fecha_corte',
    type: 'int',
    nullable: false,
    default: 0,
  })
  horas_fecha_corte: number;
  @Column({
    name: 'horas_corte_anterior',
    type: 'int',
    nullable: false,
    default: 0,
  })
  horas_corte_anterior: number;

  @Column({ name: 'horas_totales', type: 'int', nullable: false, default: 0 })
  horas_totales: number;

  @Column({
    name: 'culminado',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  culminado: boolean;
}
