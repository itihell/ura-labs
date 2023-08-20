import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HorasPracticas } from '../entities/horas-practicas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorasPracticasService {
  constructor(
    @InjectRepository(HorasPracticas)
    private readonly horasPracticas: Repository<HorasPracticas>,
  ) {}

  async created(payload: HorasPracticas) {
    try {
      const horasTotales =
        payload.horas_corte_anterior + payload.horas_fecha_corte;
      const addHoraspracticas = await this.horasPracticas.create({
        ...payload,
        horas_totales: horasTotales,
      });
      return await this.horasPracticas.save(addHoraspracticas);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async getHorasPracticas() {
    const horasPracticas = await this.horasPracticas.find();
    return horasPracticas;
  }

  async getHorasPracticasId(id: number) {
    const horasPracticas = await this.horasPracticas.findOne({
      where: { id },
    });
    return horasPracticas;
  }

  async updateHorasPracticas(id: number, payload: HorasPracticas) {
    const horasPracticas = await this.horasPracticas.findOne({
      where: { id },
    });

    this.horasPracticas.merge(horasPracticas, payload);
    return await this.horasPracticas.save(horasPracticas);
  }

  async deleteHorasPracticas(id: number) {
    const horasPracticas = await this.horasPracticas.findOne({
      where: { id },
    });
    return await this.horasPracticas.remove(horasPracticas);
  }
}
