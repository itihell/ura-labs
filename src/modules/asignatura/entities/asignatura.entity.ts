import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Asignatura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}
