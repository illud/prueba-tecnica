import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersUseCase } from '../../domain/usecase/users/users.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from '../../utils/services/bcrypt/bcrypt.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { UsersRepository } from '../../infraestructure/repository/users/users.repository'

@Module({
  controllers: [UsersController],
  providers: [UsersUseCase, UsersRepository, PrismaModule, PrismaService, BcryptService, JwtService]
})
export class UsersModule { }
