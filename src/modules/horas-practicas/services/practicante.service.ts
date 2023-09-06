import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Practicante } from '../entities/practicante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PracticanteService {
  constructor(
    @InjectRepository(Practicante)
    private readonly practicanteRepo: Repository<Practicante>,
  ) {}
  //crear practicante
  async createPracticante(payload: Practicante): Promise<Practicante> {
    const newPracticante = this.practicanteRepo.create(payload);
    return this.practicanteRepo.save(newPracticante);
  }
  //obtener todos los practicantes
  async getPracticantes(): Promise<Practicante[]> {
    try {
      return this.practicanteRepo.find();
    } catch (error) {
      throw new Error('Error al obtener los practicantes');
    }
  }
  //obtener un practicante
  async getPracticante(id: number): Promise<Practicante> {
    try {
      return this.practicanteRepo.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Error al obtener el practicante');
    }
  }
  //actualizar practicante
  async updatePracticante(
    id: number,
    payload: Practicante,
  ): Promise<Practicante> {
    try {
      await this.practicanteRepo.update({ id }, { ...payload });
      return this.getPracticante(id);
    } catch (error) {
      throw new Error('Error al actualizar el practicante');
    }
  }
  //eliminar practicante
  async deletePracticante(id: number): Promise<any> {
    try {
      await this.practicanteRepo.delete({ id });
      return { deleted: true };
    } catch (error) {
      throw new Error('Error al eliminar el practicante');
    }
  }
}
