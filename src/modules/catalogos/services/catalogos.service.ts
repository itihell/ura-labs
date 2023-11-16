import { Injectable } from '@nestjs/common';
import { DataSource, ILike } from 'typeorm';
import { Role } from '../../auth/entities/roles.entity';
import { Area } from 'src/modules/registro-carreras/entities';
import { Modalidades } from '../../modalidades/entities/modalidades-entities';
import { Practicante } from 'src/modules/horas-practicas/entities/practicante.entity';
import { CortePracticas } from 'src/modules/horas-practicas/entities/corte-practicas.entity';

import { LaboratoryUse } from 'src/modules/laboratory-use/entities';
import { User } from 'src/modules/auth/entities';
import { Carrera } from 'src/modules/registro-carreras/entities';

import { LabEntity } from '../../lab-register/entities';
import { CatalogosDto } from '../dtos/catalogos-dtos';
import { Docentes } from 'src/modules/Docentes/entities/docentes.entity';

@Injectable()
export class CatalogosService {
  constructor(private readonly dataSource: DataSource) { }

  async getRoles(query: CatalogosDto) {
    const rows = await this.dataSource
      .getRepository(Role)
      .createQueryBuilder('roles')
      .where(
        "translate(roles.role,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
        {
          buscar: query.buscar || '',
        },
      )
      .getMany();
    return rows;
  }

  async getAreas(query: CatalogosDto) {
    const rows = await this.dataSource
      .getRepository(Area)
      .createQueryBuilder('area')
      .where(
        "translate(area.nombre,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
        {
          buscar: query.buscar || '',
        },
      )
      .getMany();
    return rows;
  }

  async getModalidades(query: CatalogosDto) {
    const rows = await this.dataSource
      .getRepository(Modalidades)
      .createQueryBuilder('modalidades')
      .where(
        "translate(modalidades.modalidades,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
        {
          buscar: query.buscar || '',
        },
      )
      .getMany();
    return rows;
  }

  async getPracticante(query: CatalogosDto) {
    const row = await this.dataSource
      .getRepository(Practicante)
      .createQueryBuilder('practicantes')
      .where(
        "translate(practicantes.nombre,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
        {
          buscar: query.buscar || '',
        },
      )
      .getMany();
    return row;
  }

  async getCortePractica(query: CatalogosDto) {
    const rows = await this.dataSource
      .getRepository(CortePracticas)
      .createQueryBuilder('CortePracticas')
      .getMany();
    return rows;
  }

  async getUselab(query: CatalogosDto) {
    const rows = await this.dataSource
    .getRepository(LaboratoryUse)
    .createQueryBuilder('uselab')
    .where(
      "translate(uselab.teacher,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
      {
        buscar: query.buscar || '',
      },
    )
    .getMany();
  return rows;
  }

  async getUsers() {
    const  rows = await this.dataSource.getRepository(User).createQueryBuilder('users').getMany();
    return rows;
  }

  async getCarrera() {
    const row = await this.dataSource.getRepository(Carrera).createQueryBuilder('carrera').getMany();
    return row;
  }
  async getLaboratory() {
    const row = await this.dataSource.getRepository(LabEntity).find();
    console.log(row);
    return row;
  }

  async getDocentes(query: CatalogosDto) {
    const rows = await this.dataSource
      .getRepository(Docentes)
      .createQueryBuilder('docentes')
      .where(
        "translate(docentes.nombre, 'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
        {
          buscar: query.buscar || '',
        },
      )
      .andWhere(
        "translate(docentes.apellido, 'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') ILIKE '%' || translate(:buscar,'áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ','aeiouAEIOUaeiouAEIOU') || '%'",
        {
          buscar: query.buscar || '', // Puedes obtener este valor desde query
        },
      )
      .getMany();
    return rows;
  }
}
