import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('turnos')
export class Turnos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
