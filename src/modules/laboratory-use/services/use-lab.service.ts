import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LaboratoryUse } from "../entities/";

@Injectable()
export class UseLabService {
  constructor(
    @InjectRepository(LaboratoryUse)
    private readonly registerRepository: Repository<LaboratoryUse>
  ) { }


  async getUselab(): Promise<LaboratoryUse[]> {
    return await this.registerRepository.find({

     

      relations: ['carrera', 'carrera.area', 'modality', 'laboratorio', 'docente', 'className', 'shift']
    });
  }

  async findOne(id: any): Promise<LaboratoryUse> {
    {
      return await this.registerRepository

        .createQueryBuilder('labUse')
        .where('labUse.id = :id', { id })
        .leftJoinAndSelect('labUse.carrera', 'carrera')
        .leftJoinAndSelect('carrera.area', 'area')
        .leftJoinAndSelect('labUse.modality', 'modality')
        .leftJoinAndSelect('labUse.laboratorio', 'laboratorio')
        .leftJoinAndSelect('labUse.docente', 'docente')
        .leftJoinAndSelect('labUse.className', 'className') 
        .leftJoinAndSelect('labUse.shift', 'shift') 
        .getOne();
    }
  }

  async createUselab(LaboratoryUseDto) {
    const registerDetail = this.registerRepository.create(LaboratoryUseDto);
    await this.registerRepository.save(registerDetail);

    return registerDetail;
  }

  async deleteUselab(id: number): Promise<void> {
    await this.registerRepository.delete(id);
  }

  async update(id: number, LaboratoryUseDto) {
    const findRegister = await this.findOne(id);
    const updatedRegister = await this.registerRepository.merge(
      findRegister,
      LaboratoryUseDto,
    );

    return this.registerRepository.save(updatedRegister);
  }
}