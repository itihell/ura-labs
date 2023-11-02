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

@Injectable()
export class CatalogosService {
  constructor(private readonly dataSource: DataSource) {}

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

  async getAreas() {
    const rows = await this.dataSource.getRepository(Area).find();
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

  async getPracticante() {
    const row = await this.dataSource.getRepository(Practicante).find();
    console.log(row);
    return row;
  }

  async getCortePractica() {
    const row = await this.dataSource.getRepository(CortePracticas).find();
    console.log(row);
    return row;
  }

  async getUselab() {
    const row = await this.dataSource.getRepository(LaboratoryUse).find();
    return row;
  }

  async getUsers() {
    const row = await this.dataSource.getRepository(User).find();
    console.log(row);
  }

  async getCarrera() {
    const row = await this.dataSource.getRepository(Carrera).find();
    console.log(row);
  }
  async getLaboratory() {
    const row = await this.dataSource.getRepository(LabEntity).find();
    console.log(row);
    return row;
  }
}
