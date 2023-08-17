import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryUse } from './entities';
import { UseLabController } from './controller/use-lab.controller';
import { UseLabService } from './services/use-lab.service';

@Module({
    imports: [TypeOrmModule.forFeature([LaboratoryUse])],
    controllers: [UseLabController],
    providers: [UseLabService],
})
export class UseLabModule { }