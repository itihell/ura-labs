import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'carreras' })
export class Carreras {
  @PrimaryGeneratedColumn({ name: 'id_carrera', type: 'int4' })
  id?: number;
  @Column({
    name: 'nombre_carrera',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;
}
