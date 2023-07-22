import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsCreateUseCase } from '../../domain/usecase/posts/posts_create.usecase';
import { PostsFindAllUserPostsUseCase } from '../../domain/usecase/posts/posts_findalluserposts.usecase';
import { PostsFindAllOtherUserPostsUseCase } from '../../domain/usecase/posts/posts_findallotheruserposts.usecase';
import { PostsFindAllUseCase } from '../../domain/usecase/posts/posts_findall.usecase';
import { PostsFindAllILikeUseCase } from '../../domain/usecase/posts/posts_findalllike.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { PostsRepository } from '../../infraestructure/repository/posts/posts.repository'

@Module({
  controllers: [PostsController],
  providers: [PostsCreateUseCase, PostsFindAllUserPostsUseCase,
    PostsFindAllOtherUserPostsUseCase,
    PostsFindAllUseCase,
    PostsFindAllILikeUseCase, PostsRepository, PrismaModule, PrismaService, JwtService]
})
export class PostsModule { }
