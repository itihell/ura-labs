import { Controller, Get } from '@nestjs/common';
import { CatalogosService } from '../services/catalogos.service';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  @Get('/roles')
  async getRoles() {
    return await this.catalogosService.getRoles();
  }

  @Get('/areas')
  async getAreas() {
    return await this.catalogosService.getAreas();
  }

  @Get('/modalidades')
  async getModalidades() {
    return await this.catalogosService.getModalidades();
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
  @Get('/registro-carreras')
  async getCarreras() {
    return await this.catalogosService.getCarrera();
  }
}
