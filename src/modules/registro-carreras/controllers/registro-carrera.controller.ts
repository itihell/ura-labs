// registro-carreras/registro-carreras.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RegistroCarrerasService } from '../services/registro-carrera.service';
import { CreateAreaDto } from '../dtos/area.dto';
import { CreateCarreraDto } from '../dtos/carrera.dto';

@Controller('registro-carreras')
export class RegistroCarrerasController {
  constructor(private readonly registroService: RegistroCarrerasService) {}

  @Post('area')
  createArea(@Body() createAreaDto: CreateAreaDto) {
    return this.registroService.createArea(createAreaDto);
  }

  @Post('carrera')
  createCarrera(@Body() createCarreraDto: CreateCarreraDto) {
    return this.registroService.createCarrera(createCarreraDto);
  }
}
