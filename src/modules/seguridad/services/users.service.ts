import { Injectable } from '@nestjs/common';
import { UsersDto } from '../dtos/users-dto';

@Injectable()
export class UsersService {
  users: any[] = [];

  countItems() {
    return this.users.length;
  }

  created(user: any) {
    this.users.push(user);
    return 'Usuario creado con éxito';
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  updated(id: number, payload: UsersDto) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = payload;
    return 'Usuario actualizado con éxito';
  }

  deleted(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return 'Usuario eliminado con éxito';
  }

  existEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
