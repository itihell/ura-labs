import { Controller, Get } from '@nestjs/common';
import { CatalogosService } from '../services/catalogos.service';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) { }

  @Get('/roles')
  async getRoles() {
    return await this.catalogosService.getRoles();
  }

  @Get('/modalidades')
  async getModalidades() {
    return await this.catalogosService.getModalidades();
  }

  @Get('/practicante')
  async getPracticante() {
    return await this.catalogosService.getPracticante();
  }
}
