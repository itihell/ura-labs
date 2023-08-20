import { InjectRepository } from '@nestjs/typeorm';
import { Carreras } from '../entities/carreras.entity';
import { Repository } from 'typeorm';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CarrerasDto } from '../dtos/carreras.dto';
import { CarrerasServices } from '../services/carreras.service';

//controlador de carreras
@Controller('carreras')
export class CarrerasControler {
  constructor(private readonly CarrerasServices: CarrerasServices) {}

  @Post()
  createCarreras(@Body() payload: CarrerasDto) {
    return this.CarrerasServices.createCarreras(payload);
  }
  @Get()
  getCarreras() {
    return this.CarrerasServices.getCarreras();
  }
  @Delete('/:id')
  deleteCarreras(id: number) {
    return this.CarrerasServices.deleteCarreras(id);
  }
}
