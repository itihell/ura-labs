import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carreras } from '../entities/carreras.entity';

export class CarrerasServices {
  constructor(
    @InjectRepository(Carreras)
    private readonly carrerasRepository: Repository<Carreras>,
  ) {}

  async getCarreras() {
    return await this.carrerasRepository.find();
  }

  async createCarreras(payload: Carreras) {
    const newCarreras = await this.carrerasRepository.create(payload);
    return await this.carrerasRepository.save(newCarreras);
  }

  async deleteCarreras(id: number) {
    const carreras = await this.carrerasRepository.findOne({
      where: { id },
    });
    return await this.carrerasRepository.remove(carreras);
  }
}
