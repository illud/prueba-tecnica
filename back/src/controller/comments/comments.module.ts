import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsCreateUseCase } from '../../domain/usecase/comments/comments_create.usecase';
import { CommentsFindAllUseCase } from '../../domain/usecase/comments/comments_findall.usecase';
import { CommentsFindByIdUseCase } from '../../domain/usecase/comments/comments_findallbyid.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { CommentsRepository } from '../../infraestructure/repository/comments/comments.repository'

@Module({
  controllers: [CommentsController],
  providers: [CommentsCreateUseCase, CommentsFindAllUseCase, CommentsFindByIdUseCase, CommentsRepository, PrismaModule, PrismaService, JwtService]
})
export class CommentsModule { }
