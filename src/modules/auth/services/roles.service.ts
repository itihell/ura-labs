import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities';
import { RoleDto } from '../dtos';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
  ) {}

  async getRolesById(id: number): Promise<Role> {
    const role = await this.roleRepo.findOne({
      where: { id },
    });

    return role;
  }

  async getRoles(): Promise<Role[]> {
    return await this.roleRepo.find();
  }

  async createRole(payload: RoleDto): Promise<Role> {
    const newRole = this.roleRepo.create(payload);
    return await this.roleRepo.save(newRole);
  }

  async updateRole(id: number, payload: RoleDto): Promise<Role> {
    const role = await this.roleRepo.preload({ id, ...payload });
    return await this.roleRepo.save(role);
  }

  async deleteRole(id: number): Promise<Role> {
    const role = await this.getRolesById(id);
    if (!role) {
      throw new NotFoundException("Role doesn't exist");
    }
    const deleted = await this.roleRepo.softDelete({ id: id });

    return role;
  }
}
