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

  @Post('/informe')
  async createCorte(@Body() payload: CortePracticasDto) {
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
    const newPracticante = await this.horasPracticasService.crearePreacticante(
      payload,
    );
    return {
      data: newPracticante,
      message: 'created',
    };
  }

  @Get('/corte')
  async getCortePracticas() {
    const cortePracticas = await this.horasPracticasService.getCortePracticas();
    const data = {
      data: cortePracticas,
      message: 'ok',
    };
    return data;
  }

  @Get('/practicante')
  async getPracticante() {
    const practicante = await this.horasPracticasService.getPracticante();
    const data = {
      data: practicante,
      message: 'ok',
    };
    return data;
  }
  @Get('/corte/:id')
  async getCortePracticasId(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.getCortePracticasId(id);
  }

  @Get('/practicante/:id')
  async getPracticanteId(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.getPracticanteId(id);
  }
  @Put('/corte/:id')
  async updateCortePracticas(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: CortePracticasDto,
  ) {
    return await this.horasPracticasService.updateCortePracticas(id, payload);
  }
  @Delete('/corte/:id')
  async deleteCortePracticas(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.deleteCortePracticas(id);
  }
}
