import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'modalidades' })
export class Modalidades {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int4',
  })
  id?: number;

  @Column({ name: 'carrera', type: 'varchar', nullable: true, length: 100 })
  nombreCarrera: string;

  @Column({ name: 'modalidades', type: 'varchar', nullable: true, length: 100 })
  modalidad: string;

  @Column({ name: 'descripcion', type: 'varchar', nullable: true, length: 100 })
  descripcion?: string;

  @Column({ name: 'turno', type: 'varchar', nullable: true, length: 100 })
  turno: string;
}
