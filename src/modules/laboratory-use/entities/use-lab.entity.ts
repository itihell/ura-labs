import { Area, Carrera } from 'src/modules/registro-carreras/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
@Entity({ name: 'use_labs' })
export class LaboratoryUse {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
    id?: number;

    @Column({ name: 'className', type: 'varchar', length: 100, nullable: false })
    className: string;

    @Column({ name: 'academyArea', type: 'varchar', length: 100, nullable: false })
    academyArea: string;

    @ManyToOne(() => Carrera, (carrera) => carrera.area)
    carrera: Carrera;

    @Column({ name: 'teacher', type: 'varchar', length: 50, nullable: false })
    teacher: string;

    @Column({ name: 'date', type: 'varchar', nullable: false })
    date: string;

    @Column({ name: 'modality', type: 'varchar', length: 100, nullable: false })
    modality: string;

    @Column({ name: 'shift', type: 'varchar', length: 50, nullable: false })
    shift: string;

    @Column({ name: 'year', type: 'varchar', nullable: false })
    year: number;

    @Column({ name: 'semester', type: 'varchar', length: 50, nullable: false })
    semester: string;

    @Column({ name: 'female', type: 'varchar', nullable: false })
    female: string;

    @Column({ name: 'male', type: 'varchar', nullable: false })
    male: string;

    @Column({ name: 'total', type: 'varchar', nullable: false })
    total: number;

    @Column({ name: 'hours', type: 'varchar', nullable: false })
    hours: number;



}