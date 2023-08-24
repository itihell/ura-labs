import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Practicante } from './practicante.entity';

@Entity({ name: 'CortePracticas' })
export class CortePracticas {
  @PrimaryGeneratedColumn({ name: 'id_horas_practicas', type: 'int4' })
  id?: number;

  @Column({
    name: 'fecha_corte',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  fecha_corte: string;

  @Column({
    name: 'horas_actuales',
    type: 'int',
    nullable: false,
    default: 0,
  })
  horas_actuales: number;

  @Column({
    name: 'horas_anteriores',
    type: 'int',
    nullable: false,
    default: 0,
  })
  horas_anteriores: number;

  @Column({ name: 'horas_totales', type: 'int', nullable: false, default: 0 })
  horas_totales: number;

  @Column({
    name: 'culminado',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  culminado: boolean;

  @JoinTable()
  @ManyToOne(() => Practicante, (practicante) => practicante.corte_practicas, {
    eager: true,
  })
  practicante: Practicante[];
}
