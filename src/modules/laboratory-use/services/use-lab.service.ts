import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LaboratoryUse } from "../entities";
import { LaboratoryUseDto } from "../dto";

@Injectable()
export class UseLabService {
  constructor(
    @InjectRepository(LaboratoryUse)
    private readonly registerRepository: Repository<LaboratoryUse>
  ) { }

  findAll() {
    return this.registerRepository.find({
      relations: ['carrera', 'carrera.area','modality']
    });
  }

  findOne(id: any) {
    return this.registerRepository.findOneBy({ id });
  }
  async create(LaboratoryUseDto) {
    const registerDetail = this.registerRepository.create(LaboratoryUseDto);
    await this.registerRepository.save(registerDetail);

    return registerDetail
  }

  async remove(id: number) {
    const orderDetail = await this.findOne(id);
    await this.registerRepository.remove(orderDetail);
    return 'El registro se ha eliminado'
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