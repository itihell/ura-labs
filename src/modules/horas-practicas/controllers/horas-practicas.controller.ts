import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { HorasPracticasService } from '../services/horas-practicas.service';
import { CortePracticasDto } from '../dtos/corte-practicas.dto';
import { PracticanteDto } from '../dtos/practicante.dto';

@Controller('horas-practicas')
export class HorasPracticasController {
  constructor(private readonly horasPracticasService: HorasPracticasService) {}

  @Post('/corte')
  createCorte(@Body() payload: CortePracticasDto) {
    return this.horasPracticasService.createCorte(payload);
  }

  @Post('/practicante')
  createPracticante(@Body() payload: PracticanteDto) {
    return this.horasPracticasService.createPracticante(payload);
  }
}
