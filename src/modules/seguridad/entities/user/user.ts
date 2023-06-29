import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;
  @Column({ name: 'email', type: 'varchar', length: 100, nullable: false })
  email: string;
  @Column({ name: 'password', type: 'varchar', length: 100, nullable: false })
  password: string;
  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  telefono: string;
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
