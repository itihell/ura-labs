import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthDto } from '../dtos/auth-dto';
import { UsersService } from '../../seguridad/services/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersServices: UsersService) {}
  async signIn(payload: AuthDto) {
    try {
      //TODO: Buscar el usuario por el email
      const { password, ...user } = await this.usersServices.findByEmail(
        payload.email,
      );
      //TODO: Comparar el password
      const isMatch = await bcrypt.compare(payload.password, password);

      if (!isMatch) {
        throw new UnauthorizedException('Credenciales inválidas');
      }
      return {
        user,
        isMatch,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
