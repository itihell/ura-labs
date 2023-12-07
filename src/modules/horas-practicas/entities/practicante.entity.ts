import { Column, Entity, PrimaryGeneratedColumn, 
  ManyToOne, JoinColumn, OneToMany, OneToOne
 } from 'typeorm';
import { Carrera } from 'src/modules/registro-carreras/entities';

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
  fecha_inicio: string;

  @Column()
  fecha_fin: string;

  @Column()
  cantidad_horas: string;

  @ManyToOne(() => Carrera, carrera => carrera.practicantes)
  carrera?: Carrera;
}
