import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModule: Model<UserDocument>) {}

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
