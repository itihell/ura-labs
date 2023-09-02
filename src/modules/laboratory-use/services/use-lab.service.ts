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
      relations: ['carrera', 'carrera.area', 'modality']
    });
  }

  async findOne(id: any): Promise<LaboratoryUse> {
    return await this.registerRepository.findOneBy({ id });
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