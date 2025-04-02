import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { UserDto } from '../users/dto/userDto';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[UserModule]
})
export class AuthModule {}
