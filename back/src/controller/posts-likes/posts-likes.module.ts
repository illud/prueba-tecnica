import { Module } from '@nestjs/common';
import { PostsLikesController } from './posts-likes.controller';
import { PostsLikesUseCase } from '../../domain/usecase/post_likes/posts_likes.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { PostsLikesRepository } from '../../infraestructure/repository/post_likes/post_likes.repository'

@Module({
  controllers: [PostsLikesController],
  providers: [PostsLikesUseCase, PostsLikesRepository, PrismaModule, PrismaService, JwtService]
})
export class PostsLikesModule {}
