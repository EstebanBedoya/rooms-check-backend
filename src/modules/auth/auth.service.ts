import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/models/user.model';
import { PayloadToken } from './models/token.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
