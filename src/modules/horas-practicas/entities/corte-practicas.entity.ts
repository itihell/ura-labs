import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'informe_practicas' })
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
}
