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

  async createCorte(payload: CortePracticasDto): Promise<CortePracticas> {
    const newCorte = this.cortePracticasRepo.create(payload);
    return this.cortePracticasRepo.save(newCorte);
  }

  async createPracticante(payload: PracticanteDto): Promise<Practicante> {
    const newPracticante = this.practicanteRepository.create(payload);
    return this.practicanteRepository.save(newPracticante);
  }
}
