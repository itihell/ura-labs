import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CortePracticas } from '../entities/corte-practicas.entity';
import { In, Repository } from 'typeorm';
import { Practicante } from '../entities/practicante.entity';
import { CortePracticasDto } from '../dtos/corte-practicas.dto';

@Injectable()
export class HorasPracticasService {
  constructor(
    @InjectRepository(CortePracticas)
    private readonly cortePracticasRepo: Repository<CortePracticas>,

    @InjectRepository(Practicante)
    private readonly practicanteRepository: Repository<Practicante>,
  ) {}

  //crear corte de practicas con la relacion de practicante

  async createCorte(createCorte: CortePracticasDto) {
    try {
      const { practicante, ...cortePracticas } = createCorte;
      let corteModels = [];

      corteModels = await this.practicanteRepository.find({
        where: { nombre: In([...createCorte.practicante]) },
      });
      const corte = this.cortePracticasRepo.create({
        ...cortePracticas,
        practicante: corteModels,
      });
      await this.cortePracticasRepo.save(corte);
      return corte;
    } catch (error) {
      throw new InternalServerErrorException('error creating corte');
    }
  }

  // crear practicante sin relacion
  async createPracticante(createPracticante: Practicante) {
    try {
      const practicante = this.practicanteRepository.create(createPracticante);
      await this.practicanteRepository.save(practicante);
      return practicante;
    } catch (error) {
      throw new InternalServerErrorException('error creating practicante');
    }
  }
}
