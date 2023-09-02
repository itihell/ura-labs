import { Modalidades } from 'src/modules/modalidades/entities/modalidades-entities';
import { Area, Carrera } from 'src/modules/registro-carreras/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
@Entity({ name: 'use_labs' })
export class LaboratoryUse {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
    id?: number;

    @Column({ name: 'className', type: 'varchar', length: 100, nullable: false })
    className: string;

    @ManyToOne(() => Carrera, (carrera) => carrera.area)
    carrera: Carrera;

    @Column({ name: 'teacher', type: 'varchar', length: 50, nullable: false })
    teacher: string;

    @Column({ name: 'date', type: 'varchar', nullable: false })
    date: string;

    @ManyToOne(() => Modalidades, (modalidad) => modalidad.modalidad)
    modality: Modalidades;

    @Column({ name: 'shift', type: 'varchar', length: 50, nullable: false })
    shift: string;

    @Column({ name: 'year', type: 'varchar', nullable: false })
    year: number;

    @Column({ name: 'semester', type: 'varchar', length: 50, nullable: false })
    semester: string;

    @Column({ name: 'female', type: 'numeric', nullable: false })
    female: number;

    @Column({ name: 'male', type: 'numeric', nullable: false })
    male: number;

    @Column({ name: 'total', type: 'numeric', nullable: false })
    total: number;

    @Column({ name: 'hours', type: 'varchar', nullable: false })
    hours: string;
}