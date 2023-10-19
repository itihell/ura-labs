import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Role } from '../../auth/entities/roles.entity';
import { Modalidades } from '../../modalidades/entities/modalidades-entities';

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
}
