import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Practicante } from './practicante.entity';

@Entity({ name: 'CortePracticas' })
export class CortePracticas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha_corte: string;

  @Column()
  horas_actuales: number;

  @Column()
  horas_anteriores: number;

  @Column()
  horas_totales: number;

  @Column()
  culminado: boolean;
}
