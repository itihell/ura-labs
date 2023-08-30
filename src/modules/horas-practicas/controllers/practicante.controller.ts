import {
  Controller,
  Put,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PracticanteService } from '../services/practicante.service';
import { Practicante } from '../entities/practicante.entity';

@Controller('practicante')
export class PracticanteController {
  constructor(private readonly practicanteService: PracticanteService) {}
  //Post de practicante
  @Post('/')
  async createPracticante(@Body() payload: Practicante) {
    const newPracticante = await this.practicanteService.createPracticante(
      payload,
    );
    const data = {
      data: newPracticante,
      message: 'created',
    };
    return data;
  }
  //Get de practicante
  @Get('/')
  async getPracticantes() {
    const practicantes = await this.practicanteService.getPracticantes();
    const data = {
      data: practicantes,
      message: 'practicantes',
    };
    return data;
  }
  //Get de un practicante
  @Get(':id')
  async getPracticante(id: number) {
    const practicante = await this.practicanteService.getPracticante(id);
    const data = {
      data: practicante,
      message: 'practicante',
    };
    return data;
  }

  //Put de practicante
  @Put(':id')
  async updatePracticante(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Practicante,
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
}
