import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_has_roles' })
export class UserHasRole {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'user_id', type: 'varchar', length: 100, nullable: false })
  user_id: string;

  @Column({ name: 'role_id', type: 'varchar', length: 100, nullable: false })
  role_id: string;
}
