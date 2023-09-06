import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modalidades } from '../entities/modalidades-entities';
import { Delete } from '@nestjs/common/decorators';
import { ModalidadesDto } from '../dto/modalidates-dto';

@Injectable()
export class ModalidadesService {
  constructor(
    @InjectRepository(Modalidades)
    private readonly modalidadesRepo: Repository<Modalidades>,
  ) {}

  async createModalidades(payload: ModalidadesDto): Promise<Modalidades> {
    const newModalidades = this.modalidadesRepo.create(payload);
    return await this.modalidadesRepo.save(newModalidades);
  }

  async getModalidades(): Promise<Modalidades[]> {
    return await this.modalidadesRepo.find({ order: { id: 'ASC' } });
  }

  async getModalidadesId(id: number): Promise<Modalidades> {
    const modalidades = await this.modalidadesRepo.findOne({
      where: { id },
    });
    return modalidades;
  }

  async updated(id: number, payload: ModalidadesDto): Promise<Modalidades> {
    const modalidades = await this.modalidadesRepo.findOne({
      where: { id: id },
    });
    this.modalidadesRepo.merge(modalidades, payload);
    return await this.modalidadesRepo.save(modalidades);
  }

  async delete(id: number): Promise<Modalidades> {
    const modalidades = await this.modalidadesRepo.findOne({
      where: { id: id },
    });
    return await this.modalidadesRepo.remove(modalidades);
  }
}
