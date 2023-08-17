import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Lab {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  description: string;

  @Column({ name: 'fundation', type: 'varchar', length: 20, nullable: true })
  fundation: string;

  @Column({ name: 'token', type: 'varchar', length: 200, nullable: true })
  token: string;

  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isActive: boolean;
}
