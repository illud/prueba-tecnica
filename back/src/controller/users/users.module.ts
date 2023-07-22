import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersCreateUseCase } from '../../domain/usecase/users/users_create.usecase';
import { UsersLoginUseCase } from '../../domain/usecase/users/users_login.usecase';
import { UsersUpdateUseCase } from '../../domain/usecase/users/users_update.usecase';
import { UsersFindAllUseCase } from '../../domain/usecase/users/users_findall.usecase';
import { UsersFindOneUseCase } from '../../domain/usecase/users/users_findone.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from '../../utils/services/bcrypt/bcrypt.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { UsersRepository } from '../../infraestructure/repository/users/users.repository'

@Module({
  controllers: [UsersController],
  providers: [UsersCreateUseCase,
    UsersLoginUseCase,
    UsersUpdateUseCase,
    UsersFindAllUseCase,
    UsersFindOneUseCase,
    UsersRepository, PrismaModule, PrismaService, BcryptService, JwtService]
})
export class UsersModule { }
