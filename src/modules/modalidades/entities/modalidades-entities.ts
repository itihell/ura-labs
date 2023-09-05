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
    length: 50,
  })
  modalidad: string;

  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isActive: boolean;

  @Column({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  delete_at: Date;
}
