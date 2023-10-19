import { Module } from '@nestjs/common';
import { CatalogosController } from './controllers/catalogos.controller';
import { CatalogosService } from './services/catalogos.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule {}
