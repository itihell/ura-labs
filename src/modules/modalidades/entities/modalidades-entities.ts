import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'modalidades' })
export class Modalidades {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int4',
  })
  id?: number;

  @Column({
    name: 'modalidades',
    type: 'varchar',
    nullable: false,
    length: 100,
    default: true,
  })
  modalidad: string;
}
