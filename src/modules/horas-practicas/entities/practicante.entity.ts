import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CortePracticas } from './corte-practicas.entity';

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

  @Column()
  estado: boolean;

  @OneToMany(() => CortePracticas, (corte) => corte.practicante)
  cortes: CortePracticas[];
}
