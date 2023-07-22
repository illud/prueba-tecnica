import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { PostsLikesCreateUseCase } from '../../domain/usecase/post_likes/posts_likes_create.usecase';
import { PostsLikesFindAllUseCase } from '../../domain/usecase/post_likes/posts_likes_findall.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('posts-likes')
export class PostsLikesController {
    constructor(private postsLikesCreateUseCase: PostsLikesCreateUseCase,
        private postsLikesFindAllUseCase: PostsLikesFindAllUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body) {
        return await this.postsLikesCreateUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.postsLikesFindAllUseCase.execute();
    }
}
