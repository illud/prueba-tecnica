import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsUseCase } from '../../domain/usecase/comments/comments.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { CommentsRepository } from '../../infraestructure/repository/comments/comments.repository'

@Module({
  controllers: [CommentsController],
  providers: [CommentsUseCase, CommentsRepository, PrismaModule, PrismaService, JwtService]
})
export class CommentsModule { }
