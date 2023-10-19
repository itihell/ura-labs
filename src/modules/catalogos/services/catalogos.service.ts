import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Role } from '../../auth/entities/roles.entity';

@Injectable()
export class CatalogosService {
  constructor(private readonly dataSource: DataSource) {}

  async getRoles() {
    const rows = await this.dataSource.getRepository(Role).find();

    return rows;
  }
}
