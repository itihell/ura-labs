import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CortePracticas } from '../entities/corte-practicas.entity';
import { Repository } from 'typeorm';
import { CortePracticasDto } from '../dtos/corte-practicas.dto';

@Injectable()
export class CortePracticasService {
  constructor(
    @InjectRepository(CortePracticas)
    private readonly cortePracticasRepo: Repository<CortePracticas>,
  ) {}

  //crear corte con relacion para agregar el nombre del practicante
  async createCorte(payload: CortePracticasDto): Promise<CortePracticas> {
    const { practicante, ...newCortePracticas } = payload;
    const newCorte = this.cortePracticasRepo.create({
      ...newCortePracticas,
      practicante,
    });
    return this.cortePracticasRepo.save(newCorte);
  }
  //obtener todos los cortes
  async getCortes(): Promise<CortePracticas[]> {
    return this.cortePracticasRepo.find();
  }
  //obtener un corte
  async getCorte(id: number): Promise<CortePracticas> {
    return this.cortePracticasRepo.findOne({ where: { id } });
  }
  //actualizar corte
  async updateCorte(
    id: number,
    payload: CortePracticasDto,
  ): Promise<CortePracticas> {
    const { practicante, ...newCortePracticas } = payload;
    await this.cortePracticasRepo.update({ id }, { ...newCortePracticas });
    return this.getCorte(id);
  }
  //eliminar corte
  async deleteCorte(id: number): Promise<any> {
    await this.cortePracticasRepo.delete({ id });
    return { deleted: true };
  }
}
