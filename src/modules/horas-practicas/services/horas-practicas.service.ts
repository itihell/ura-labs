import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InformePracticas } from '../entities/informe-practicas';
import { Repository } from 'typeorm';
import { PracticanteDto } from '../dtos/practicante-dto';
import { Practicante } from '../entities/practicante';

@Injectable()
export class HorasPracticasService {
  constructor(
    @InjectRepository(InformePracticas)
    private readonly horasPracticas: Repository<InformePracticas>,

    @InjectRepository(Practicante)
    private readonly practicanteRepository: Repository<Practicante>,
  ) {}
  //crear informe de practicas
  async createdInforme(payload: InformePracticas) {
    try {
      const horasTotales = payload.horas_anteriores + payload.horas_actuales;
      const addHoraspracticas = await this.horasPracticas.create({
        ...payload,
        horas_totales: horasTotales,
      });
      return await this.horasPracticas.save(addHoraspracticas);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  //registrar practicante
  async crearePreacticante(practicantes) {
    try {
      const practicante = this.practicanteRepository.create(practicantes);
      return this.practicanteRepository.save(practicante);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  //obtener informe de practicas
  async getInformePracticas() {
    const horasPracticas = await this.horasPracticas.find();
    return horasPracticas;
  }
  //obtener practicante
  async getPracticante() {
    const practicante = await this.practicanteRepository.find();
    return practicante;
  }

  //obtener informe de practicas por id
  async getInformePracticasId(id: number) {
    const horasPracticas = await this.horasPracticas.findOne({
      where: { id },
    });
    return horasPracticas;
  }

  //obtener practicante por id
  async getPracticanteId(id: number) {
    const practicante = await this.practicanteRepository.findOne({
      where: { id },
    });
    return practicante;
  }
  //actualizar informe de practicas
  async updateInformePracticas(id: number, payload: InformePracticas) {
    const horasPracticas = await this.horasPracticas.findOne({
      where: { id },
    });

    this.horasPracticas.merge(horasPracticas, payload);
    return await this.horasPracticas.save(horasPracticas);
  }
  //eliminar informe de practicas
  async deleteInformePracticas(id: number) {
    const horasPracticas = await this.horasPracticas.findOne({
      where: { id },
    });
    return await this.horasPracticas.remove(horasPracticas);
  }
}
