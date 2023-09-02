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
import { ModalidadesService } from '../services/modalidades.service';
import { ModalidadesDto } from '../dto/modalidates-dto';
import { Modalidades } from '../entities/modalidades-entities';

@Controller('modalidades')
export class ModalidadesController {
  constructor(private readonly RepoModalidadesService: ModalidadesService) { }

  @Post('/')
  createdModalidades(@Body() payload: ModalidadesDto) {
    const modalidades = this.RepoModalidadesService.created(payload);
    const data = {
      data: modalidades,
    };
    return data;
  }

  @Get('/')
  async getModalidades() {
    const modalidades = await this.RepoModalidadesService.getModalidades();
    const data = {
      data: modalidades,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  getModalidadesId(@Param('id', ParseIntPipe) id: number) {
    const modalidades = this.RepoModalidadesService.getModalidadesId(id);
    const data = {
      data: modalidades,
    };
    return data;
  }

  @Put('/:id')
  async updatedModalidades(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Modalidades,
  ) {
    const modalidades = await this.RepoModalidadesService.updated(id, payload);
    const data = {
      data: modalidades,
    };
    return data;
  }

  @Delete('/:id')
  async deletedModalidades(@Param('id', ParseIntPipe) id: number) {
    const modalidades = await this.RepoModalidadesService.delete(id);
    const data = {
      data: modalidades,
    };
    return data;
  }
}
