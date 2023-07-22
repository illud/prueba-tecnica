import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsUseCase } from '../../domain/usecase/posts/posts.usecase';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '../../utils/services/jwt/jwt.service';
import { PostsRepository } from '../../infraestructure/repository/posts/posts.repository'

@Module({
  controllers: [PostsController],
  providers: [PostsUseCase, PostsRepository, PrismaModule, PrismaService, JwtService]
})
export class PostsModule { }
