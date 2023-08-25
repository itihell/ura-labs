import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CortePracticas } from '../entities/corte-practicas.entity';
import { Repository } from 'typeorm';
import { Practicante } from '../entities/practicante.entity';
import { CortePracticasDto } from '../dtos/corte-practicas.dto';
import { PracticanteDto } from '../dtos/practicante.dto';

@Injectable()
export class HorasPracticasService {
  constructor(
    @InjectRepository(CortePracticas)
    private readonly cortePracticasRepo: Repository<CortePracticas>,

    @InjectRepository(Practicante)
    private readonly practicanteRepository: Repository<Practicante>,
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

  //crear practicante sin relacion
  async createPracticante(payload: PracticanteDto) {
    const newPracticante = await this.practicanteRepository.save(payload);
    await this.practicanteRepository.save(newPracticante);
    return newPracticante;
  }
}
