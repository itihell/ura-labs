import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Docentes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  fechaNacimiento: string;
}
