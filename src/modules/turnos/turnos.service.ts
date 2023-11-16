import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turnos } from './entities/turnos.entity';

@Injectable()
export class TurnosService {
  constructor(
    @InjectRepository(Turnos)
    private turnosRepository: Repository<Turnos>,
  ) {}

  async create(turnos: Turnos): Promise<Turnos> {
    return await this.turnosRepository.save(turnos);
  }

  async findOne(id: number): Promise<Turnos> {
    return await this.turnosRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Turnos[]> {
    return await this.turnosRepository.find();
  }
}
