import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laboratory' })
export class LabEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'labName', type: 'varchar', length: 100, nullable: true })
  labName: string;

  @Column({
  name: 'description', type: 'varchar', length: 100, nullable: false, unique: true,})
  description: string;

  @Column({ name: 'fundation', type: 'varchar', length: 20, nullable: true })
  fundation: string;

  @Column({ name: 'engineer', type: 'varchar', length: 100, nullable: true })
  builder: string;

  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: true,
    default: true,
  })
  isActive: boolean;
}
