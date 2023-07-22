import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { PostsLikesUseCase } from '../../domain/usecase/post_likes/posts_likes.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('posts-likes')
export class PostsLikesController {
    constructor(private postsLikesUseCase: PostsLikesUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body) {
        return await this.postsLikesUseCase.create(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.postsLikesUseCase.findAll();
    }
}
