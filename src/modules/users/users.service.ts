import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      role: 'admin',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      role: 'admin',
    },
  ];

  async validateUser(
    username: string,
    password: string,
  ): Promise<User | undefined> {
    return this.users.find(
      (user) => user.username === username && user.password === password,
    );
  }
}
