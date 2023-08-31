import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modalidades } from '../entities/modalidades-entities';
import { Delete } from '@nestjs/common/decorators';

@Injectable()
export class ModalidadesService {
  constructor(
    @InjectRepository(Modalidades)
    private readonly modalidadesRepo: Repository<Modalidades>,
  ) {}

  async created(payload: Modalidades): Promise<Modalidades> {
    const newModalidades = await this.modalidadesRepo.create(payload);
    return await this.modalidadesRepo.save(newModalidades);
  }

  async getModalidades(): Promise<Modalidades[]> {
    return await this.modalidadesRepo.find({ order: { id: 'ASC' } });
  }

  async getModalidadesId(id: number) {
    const modalidades = await this.modalidadesRepo.findOne({
      where: { id: id },
    });
    return modalidades;
  }

  async updated(id: number, payload: Modalidades): Promise<Modalidades> {
    const modalidades = await this.modalidadesRepo.findOne({
      where: { id: id },
    });
    this.modalidadesRepo.merge(modalidades, payload);
    return await this.modalidadesRepo.save(modalidades);
  }

  // async delete(id: number): Promise<Modalidades> {
  //   const modalidades = await this.getModalidadesId(id);
  //   if (!modalidades) {
  //     throw new Error('No se encontro la modalidad');
  //   }
  //   const deleted = await this.modalidadesRepo.softDelete({ id: id });
  //   return modalidades;
  // }

  async delete(id: number): Promise<Modalidades> {
    const modalidades = await this.getModalidadesId(id);
    if (!modalidades) {
      throw new Error('No se encontro la modalidad');
    }
    const deleted = await this.modalidadesRepo.softDelete({ id: id });
    return modalidades;
  }
}
