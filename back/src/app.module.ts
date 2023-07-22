import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controller/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './controller/posts/posts.module';
import { CommentsModule } from './controller/comments/comments.module';
import { CommentsLikesModule } from './controller/comments-likes/comments-likes.module';
import { PostsLikesModule } from './controller/posts-likes/posts-likes.module';
import { BcryptModule } from './utils/services/bcrypt/bcrypt.module';
import { JwtModule } from './utils/services/jwt/jwt.module';
import { AuthModule } from './utils/services/auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, PostsModule, CommentsModule, CommentsLikesModule, PostsLikesModule, BcryptModule, JwtModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
