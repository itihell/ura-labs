import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UsersDto, UserPartialTypeDto } from '../dtos/users-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SetupEnum } from '../../auth/enums';

@Injectable()
export class UsersService {
  users: any[] = [];

  // Inyectamos el servicio de users
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  countItems() {
    return this.users.length;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('No se encontro el usuario');
    }

    return user;
  }

  async created(payload: UsersDto) {
    try {
      let { password } = payload;

      password = await bcrypt.hash(password, SetupEnum.SALTORROUND);

      const newUser = this.userRepository.create({ ...payload, password });
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return user;
  }

  async updated(id: number, payload: UserPartialTypeDto) {
    const oldUser = await this.userRepository.findOne({ where: { id: id } });
    if (!oldUser) {
      throw new NotFoundException('No se encontro el usuario');
    }

    const merged = this.userRepository.merge(oldUser, payload);
    return await this.userRepository.save(merged);
  }

  deleted(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return 'Usuario eliminado con éxito';
  }
}
