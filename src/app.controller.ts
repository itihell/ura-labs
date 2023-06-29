import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ValidarApiKeyGuard } from './guards/validar-api-key.guard';

@Controller()
export class AppController {
  constructor(
    private readonly config: ConfigService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.config.get('API_KEY');
  }

  @Get('sin-guard')
  getSinGuard(): string {
    return 'endpoint sin guard';
  }
}
