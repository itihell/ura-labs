import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from '../entities';
import { CreateAreaDto } from '../dtos/area.dto';

@Injectable()
export class RegistroAreaService {
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>,
  ) {}

  async createArea(createAreaDto: CreateAreaDto): Promise<Area> {
    const nuevaArea = this.areaRepository.create(createAreaDto);
    return this.areaRepository.save(nuevaArea);
  }

  async getArea(): Promise<Area[]> {
    return await this.areaRepository.find();
  }

  async getAreaById(id: number): Promise<Area> {
    const area = await this.areaRepository.findOne({
      where: { id },
    });

    return area;
  }

  async deleteArea(id: number): Promise<void> {
    await this.areaRepository.delete(id);
  }

  async editArea(id: number, payload: CreateAreaDto): Promise<Area> {
    const area = await this.areaRepository.preload({ id, ...payload });
    return await this.areaRepository.save(area);
  }
}
