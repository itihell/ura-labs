import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Practicante } from './practicante.entity';

@Entity({ name: 'CortePracticas' })
export class CortePracticas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  practicanteId: number;

  @Column()
  fecha_corte: string;

  @Column()
  horas_actuales: number;

  @Column()
  horas_anteriores: number;

  @Column()
  horas_totales: number;

  //relacion con practicante
  @ManyToOne(()=> Practicante, (practicante) => practicante.cortePracticas, { eager: true })
  @JoinColumn({name: 'practicanteId'})
  practicante: Practicante;
}
