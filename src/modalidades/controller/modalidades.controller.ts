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
import { ModalidadesDto, ModalidadesPartialDto } from '../dto/modalidates-dto';
import { UserPartialTypeDto } from 'src/modules/auth/dtos';

@Controller('modalidades')
export class ModalidadesController {
  constructor(private readonly RepoModalidadesService: ModalidadesService) {}

  @Post('/')
  createdModalidades(@Body() payload: ModalidadesDto) {
    return this.RepoModalidadesService.created(payload);
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
    return this.RepoModalidadesService.getModalidadesId(id);
  }

  @Put('/:id')
  async updatedModalidades(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ModalidadesPartialDto,
  ) {
    return await this.RepoModalidadesService.updated(id, payload);
  }

  @Delete('/:id')
  async deletedModalidades(@Param('id', ParseIntPipe) id: number) {
    return await this.RepoModalidadesService.deleted(id);
  }
}
