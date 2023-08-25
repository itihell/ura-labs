import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'modalidades' })
export class Modalidades {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int4',
  })
  id?: number;

  @Column({ name: 'modalidades', type: 'varchar', nullable: true, length: 100 })
  modalidad: string;
}
