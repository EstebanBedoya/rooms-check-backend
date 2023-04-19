import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { RoomsModule } from './modules/rooms/rooms.module';

@Module({
  imports: [AuthModule, UsersModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
