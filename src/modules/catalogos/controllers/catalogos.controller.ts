import { Controller, Get } from '@nestjs/common';
import { CatalogosService } from '../services/catalogos.service';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly catalogoServices: CatalogosService) { }

  @Get('/roles')
  async getRoles() {
    return await this.catalogoServices.getRoles();
  }

  @Get('/practicante')
  async getPracticante() {
    return await this.catalogoServices.getPracticante();
  }

}
