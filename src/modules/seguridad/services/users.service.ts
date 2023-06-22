import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: any[] = [];

  created(user: any) {
    this.users.push(user);
    return 'Usuario creado con éxito';
  }

  getUsers() {
    return this.users;
  }

  getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
