import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Role } from '../../auth/entities/roles.entity';
import { Area } from 'src/modules/registro-carreras/entities';
import { Modalidades } from '../../modalidades/entities/modalidades-entities';
import { Practicante } from 'src/modules/horas-practicas/entities/practicante.entity';
import { CortePracticas } from 'src/modules/horas-practicas/entities/corte-practicas.entity';
import { User } from 'src/modules/auth/entities';

@Injectable()
export class CatalogosService {
  constructor(private readonly dataSource: DataSource) {}

  async getRoles() {
    const rows = await this.dataSource.getRepository(Role).find();
    return rows;
  }

  async getAreas() {
    const rows = await this.dataSource.getRepository(Area).find();
    return rows;
  }

  async getModalidades() {
    const rows = await this.dataSource.getRepository(Modalidades).find();
    console.log(rows);
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

  async getUsers() {
    const row = await this.dataSource.getRepository(User).find();
    console.log(row);
    return row;
  }
}
