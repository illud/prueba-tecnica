import { Module } from '@nestjs/common';
import { CommentsLikesController } from './comments-likes.controller';
import { CommentsLikesCreateUseCase } from '../../domain/usecase/comments_likes/comments_likes_create.usecase';
import { CommentsLikesFinAllUseCase } from '../../domain/usecase/comments_likes/comments_likes_findall.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { CommentsLikesRepository } from '../../infraestructure/repository/comments_likes/comments_likes.repository'

@Module({
  controllers: [CommentsLikesController],
  providers: [CommentsLikesCreateUseCase, CommentsLikesFinAllUseCase, CommentsLikesRepository, PrismaModule, PrismaService, JwtService]
})
export class CommentsLikesModule { }
