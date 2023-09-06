import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CortePracticas' })
export class CortePracticas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  practicante: string;

  @Column()
  fecha_corte: string;

  @Column()
  horas_actuales: number;

  @Column()
  horas_anteriores: number;

  @Column()
  horas_totales: number;
}
