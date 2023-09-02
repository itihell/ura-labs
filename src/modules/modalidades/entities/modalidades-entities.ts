import { LaboratoryUse } from 'src/modules/laboratory-use/entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  
  @OneToMany(() => LaboratoryUse, (laboratoryUse) => laboratoryUse.modality)
  laboratoryUse: LaboratoryUse[];

  modality: Modalidades[];
}
