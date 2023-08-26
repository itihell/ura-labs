import { Body, Controller, Get, Post, Patch, ParseUUIDPipe, ParseIntPipe } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { LaboratoryUseDto } from "../dto";
import { UseLabService } from "../services/use-lab.service";
import { LaboratoryUse } from "../entities";

@Controller('uselab')
export class UseLabController {
  constructor(
    private readonly registerDetailServiceRepo: UseLabService
  ) { }
  // @Post()
  // create(@Body() orderDto: LaboratoryUseDto) {
  //   return this.registerDetailServiceRepo.create(orderDto);
  // }
  //@Get()
  //async getRegistrosWithDetails(): Promise<LaboratoryUse[]> {
    //return await this.registerDetailServiceRepo.findRegistrosWithDetails();
  //}

  @Get()
  findAll() {
    return this.registerDetailServiceRepo.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number) {
    return this.registerDetailServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.registerDetailServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRegisterDetailDto: LaboratoryUseDto
  ) {
    return this.registerDetailServiceRepo.update(id, updateRegisterDetailDto);
  }
}