import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CortePracticas } from '../entities/corte-practicas.entity';
import { Repository } from 'typeorm';
import { Practicante } from '../entities/practicante.entity';

@Injectable()
export class HorasPracticasService {
  constructor(
    @InjectRepository(CortePracticas)
    private readonly cortePracticas: Repository<CortePracticas>,

    @InjectRepository(Practicante)
    private readonly practicanteRepository: Repository<Practicante>,
  ) {}
  //crear corte de practicas
  async createCorte(payload: CortePracticas) {
    try {
      const horasTotales = payload.horas_anteriores + payload.horas_actuales;
      const addHoraspracticas = await this.cortePracticas.create({
        ...payload,
        horas_totales: horasTotales,
      });
      return await this.cortePracticas.save(addHoraspracticas);
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
  //obtener corte de practicas
  async getCortePracticas() {
    const cortesPracticas = await this.cortePracticas.find();
    return cortesPracticas;
  }
  //obtener practicante
  async getPracticante() {
    const practicante = await this.practicanteRepository.find();
    return practicante;
  }

  //obtener corte de practicas por id
  async getCortePracticasId(id: number) {
    const cortePractica = await this.cortePracticas.findOne({
      where: { id },
    });
    return cortePractica;
  }

  //obtener practicante por id
  async getPracticanteId(id: number) {
    const practicante = await this.practicanteRepository.findOne({
      where: { id },
    });
    return practicante;
  }
  //actualizar corte de practicas
  async updateCortePracticas(id: number, payload: CortePracticas) {
    const cortePracticas = await this.cortePracticas.findOne({
      where: { id },
    });

    this.cortePracticas.merge(cortePracticas, payload);
    return await this.cortePracticas.save(cortePracticas);
  }
  //eliminar informe de practicas
  async deleteCortePracticas(id: number) {
    const cortePractica = await this.cortePracticas.findOne({
      where: { id },
    });
    return await this.cortePracticas.remove(cortePractica);
  }
}
