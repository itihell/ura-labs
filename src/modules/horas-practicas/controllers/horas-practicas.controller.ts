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
  async createCorte(
    @Body() payload: CortePracticasDto,
    @Body() practicanteId: number,
  ) {
    const newCortePracticas = await this.horasPracticasService.createCorte(
      payload,
    );

    const data = {
      data: newCortePracticas,
      message: 'created',
    };

    return data;
  }

  @Post('/practicante')
  async createPracticante(@Body() payload: PracticanteDto) {
    const newPracticante = await this.horasPracticasService.createPracticante(
      payload,
    );

    const data = {
      data: newPracticante,
      message: 'created',
    };

    return data;
  }
}
