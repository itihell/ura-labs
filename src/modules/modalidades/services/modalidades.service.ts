import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modalidades } from '../entities/modalidades-entities';
import { ModalidadesPartialDto } from '../dto/modalidates-dto';

@Injectable()
export class ModalidadesService {
  modalidades: any[] = [];

  constructor(
    @InjectRepository(Modalidades)
    private readonly modalidadesRepo: Repository<Modalidades>,
  ) {}

  countItems() {
    return this.modalidades.length;
  }

  async created(payload: ModalidadesPartialDto) {
    const modalidades = await this.modalidadesRepo.create(payload);
    return await this.modalidadesRepo.save(modalidades);
  }

  async getModalidades() {
    return await this.modalidadesRepo.find();
  }

  async getModalidadesId(id: number) {
    return await this.modalidadesRepo.findOne({ where: { id } });
  }

  async updated(id: number, payload: ModalidadesPartialDto) {
    await this.modalidadesRepo.update({ id }, payload);
    return await this.modalidadesRepo.findOne({ where: { id } });
  }

  // deleted(id: number) {
  //   const index = this.modalidades.findIndex((item) => item.id === id);
  //   this.modalidades.splice(index, 1);
  //   return { message: 'Modalidad Eliminada' };
  // }
  async deleted(id: number) {
    await this.modalidadesRepo.delete({ id });
    return { message: 'Modalidad Eliminada' };
  }
}
