// registro-carreras/registro-carreras.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area, Carrera } from '../entities';
import { CreateAreaDto } from '../dtos/area.dto';
import { CreateCarreraDto } from '../dtos/carrera.dto';

@Injectable()
export class RegistroCarrerasService {
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>,
    @InjectRepository(Carrera)
    private carreraRepository: Repository<Carrera>,
  ) {}

  async createArea(createAreaDto: CreateAreaDto): Promise<Area> {
    const nuevaArea = this.areaRepository.create(createAreaDto);
    return this.areaRepository.save(nuevaArea);
  }

  async createCarrera(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    const { area, ...carreraData } = createCarreraDto;
    const nuevaCarrera = this.carreraRepository.create({
      ...carreraData,
      area, // Asignando el área a la carrera
    });
    return this.carreraRepository.save(nuevaCarrera);
  }
}
