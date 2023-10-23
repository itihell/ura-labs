import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Role } from '../../auth/entities/roles.entity';
import { Modalidades } from '../../modalidades/entities/modalidades-entities';
import { Practicante } from 'src/modules/horas-practicas/entities/practicante.entity';
import { CortePracticas } from 'src/modules/horas-practicas/entities/corte-practicas.entity';

@Injectable()
export class CatalogosService {
  constructor(private readonly dataSource: DataSource) {}

  async getRoles() {
    const rows = await this.dataSource.getRepository(Role).find();
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
}
