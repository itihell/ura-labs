import { Controller, Get, Query } from '@nestjs/common';
import { CatalogosService } from '../services/catalogos.service';
import { CatalogosDto } from '../dtos/catalogos-dtos';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  @Get('/roles')
  async getRoles(@Query() query: CatalogosDto) {
    return await this.catalogosService.getRoles(query);
  }

  @Get('/areas')
  async getAreas() {
    return await this.catalogosService.getAreas();
  }

  @Get('/modalidades')
  async getModalidades(@Query() query: CatalogosDto) {
    return await this.catalogosService.getModalidades(query);
  }

  @Get('/practicante')
  async getPracticante() {
    return await this.catalogosService.getPracticante();
  }

  @Get('/corte-practicas')
  async getCortePractica() {
    return await this.catalogosService.getCortePractica();
  }

  @Get('/uselab')
  async getUselab() {
    return await this.catalogosService.getUselab();
  }

  @Get('/users')
  async getUsers() {
    return await this.catalogosService.getUsers();
  }
  @Get('/labregister')
  async getLaboratory() {
    return await this.catalogosService.getLaboratory();
  }
  @Get('/registro-carreras')
  async getCarreras() {
    return await this.catalogosService.getCarrera();
  }
}
