import { Injectable } from '@nestjs/common';

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

  existEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
