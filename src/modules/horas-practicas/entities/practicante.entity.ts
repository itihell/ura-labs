import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Carrera } from 'src/modules/registro-carreras/entities';
import { CortePracticas } from './corte-practicas.entity';

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
  carreraId: number;

  @Column()
  fecha_inicio: string;

  @Column()
  fecha_fin: string;

  @Column()
  cantidad_horas: string;

  //relacion con corte practicas
  @OneToMany(() => CortePracticas, (cortePracticas) => cortePracticas.practicante)
  cortePracticas?: CortePracticas[];

  //relacion con carrera 
  @ManyToOne(() => Carrera, (carrera) => carrera.practicantes)
  @JoinColumn({ name: 'carreraId' })
  carrera?: Carrera;
}
