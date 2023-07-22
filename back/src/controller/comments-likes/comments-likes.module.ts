import { Module } from '@nestjs/common';
import { CommentsLikesController } from './comments-likes.controller';
import { CommentsLikesUseCase } from '../../domain/usecase/comments_likes/comments_likes.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { CommentsLikesRepository } from '../../infraestructure/repository/comments_likes/comments_likes.repository'

@Module({
  controllers: [CommentsLikesController],
  providers: [CommentsLikesUseCase, CommentsLikesRepository, PrismaModule, PrismaService, JwtService]
})
export class CommentsLikesModule { }
