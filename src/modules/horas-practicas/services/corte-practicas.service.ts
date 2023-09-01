import { Injectable, NotFoundException } from '@nestjs/common';
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
    try {
      const { practicante, ...newCortePracticas } = payload;
      const newCorte = this.cortePracticasRepo.create({
        ...newCortePracticas,
        practicante,
      });
      return this.cortePracticasRepo.save(newCorte);
    } catch (error) {
      throw new Error('Error al crear el corte');
    }
  }
  //obtener todos los cortes
  async getCortes(): Promise<CortePracticas[]> {
    try {
      return this.cortePracticasRepo.find();
    } catch (error) {
      throw new Error('Error al obtener los cortes');
    }
  }
  //obtener un corte
  async getCorte(id: number): Promise<CortePracticas> {
    try {
      return this.cortePracticasRepo.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException('No se encontro el corte');
    }
  }
  //actualizar corte
  async updateCorte(
    id: number,
    payload: CortePracticasDto,
  ): Promise<CortePracticas> {
    try {
      const { practicante, ...newCortePracticas } = payload;
      await this.cortePracticasRepo.update({ id }, { ...newCortePracticas });
      return this.getCorte(id);
    } catch (error) {
      throw new Error('Error al actualizar el corte');
    }
  }
  //eliminar corte
  async deleteCorte(id: number): Promise<any> {
    try {
      await this.cortePracticasRepo.delete({ id });
      return { deleted: true };
    } catch (error) {
      throw new Error('Error al eliminar el corte');
    }
  }
}