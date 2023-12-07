import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LaboratoryUse } from "../entities/";
import { QueryParamsUsoLabDto } from "../dto/query-params-laboratoryUse.dto";

@Injectable()
export class UseLabService {
  constructor(
    @InjectRepository(LaboratoryUse)
    private readonly registerRepository: Repository<LaboratoryUse>
  ) { }


  async getUselab(query: QueryParamsUsoLabDto): Promise<LaboratoryUse[]> {
    const rows = this.registerRepository.createQueryBuilder('contables').where('id <> 0');
  
    if (query.className) {
      rows.andWhere('contables.className ILIKE :className', { className: `%${query.className}%` });
    }
  
    if (query.is_active === 'true') {
      rows.andWhere('contables.is_active = :is_active', { is_active: true });
    }
  
    if (query.is_active === 'false') {
      rows.andWhere('contables.is_active = :is_active', { is_active: false });
    }
  
    rows.orderBy('contables.id', 'ASC');
  
    // Manejo de relaciones con leftJoinAndSelect
    rows.leftJoinAndSelect('contables.className', 'className')
  
    return await rows.getMany();
  }
  

  // async getUselab(query: QueryParamsUsoLabDto): Promise<LaboratoryUse[]> {
  //   const rows = this.registerRepository.createQueryBuilder('contables').where('id <> 0');
  //   console.log(query)
  //   if (query.className)
  //     rows.andWhere('contables.className ILIKE :className', { className: `%${query.className}%` });

  //   if (query.is_active === 'true')
  //     rows.andWhere('contables.is_active = :is_active', {
  //       is_active: true,
  //     });

  //   if (query.is_active === 'false')
  //     rows.andWhere('contables.is_active = :is_active', {
  //       is_active: false,
  //     });

  //   rows.orderBy('contables.id', 'ASC');
      
  //   // return await rows.getMany();
  //   // return await this.registerRepository.find({
      
  //   //   relations: ['carrera', 'carrera.area', 'modality', 'laboratorio', 'docente', 'className']
  //   // });

  //   rows.select(['carrera', 'carrera.area', 'modality', 'laboratorio', 'docente', 'className']);

  // // Usar getMany para obtener el resultado
  // return await rows.getMany();
  // }

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