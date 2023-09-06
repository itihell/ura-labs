import {
  Controller,
  Put,
  Post,
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PracticanteService } from '../services/practicante.service';
import { PracticanteDto } from '../dtos/practicante.dto';

@Controller('practicante')
export class PracticanteController {
  constructor(private readonly practicanteService: PracticanteService) {}

  //crear practicante
  @Post('/')
  async createPracticante(@Body() payload: PracticanteDto) {
    try {
      const newPracticante = await this.practicanteService.createPracticante(
        payload,
      );
      const data = {
        data: newPracticante,
        message: 'created',
      };
      return data;
    } catch (error) {
      throw new Error('Error al crear el practicante');
    }
  }

  //obtener todos los practicantes
  @Get('/')
  async getPracticantes() {
    const practicantes = await this.practicanteService.getPracticantes();
    const data = {
      data: practicantes,
      message: 'practicantes',
    };
    return data;
  }

  //obtener un practicante
  @Get(':id')
  async getPracticante(@Param('id', ParseIntPipe) id: number) {
    const practicante = await this.practicanteService.getPracticante(id);
    const data = {
      data: practicante,
      message: 'practicante',
    };
    return data;
  }

  //actualizar practicante
  @Put(':id')
  async updatePracticante(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: PracticanteDto,
  ) {
    const practicante = await this.practicanteService.updatePracticante(
      id,
      payload,
    );
    const data = {
      data: practicante,
      message: 'updated',
    };
    return data;
  }

  //eliminar practicante
  @Delete(':id')
  async deletePracticante(@Param('id', ParseIntPipe) id: number) {
    const practicante = await this.practicanteService.deletePracticante(id);
    const data = {
      data: practicante,
      message: 'deleted',
    };
    return data;
  }
}
