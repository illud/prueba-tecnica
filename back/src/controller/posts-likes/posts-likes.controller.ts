import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { PostsLikesCreateUseCase } from '../../domain/usecase/post_likes/posts_likes_create.usecase';
import { PostsLikesFindAllUseCase } from '../../domain/usecase/post_likes/posts_likes_findall.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';
import { PostsLikesDto } from './posts_likes.dto'
import {
    ApiBearerAuth,
    ApiBody,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('posts-likes')
@Controller('posts-likes')
export class PostsLikesController {
    constructor(private postsLikesCreateUseCase: PostsLikesCreateUseCase,
        private postsLikesFindAllUseCase: PostsLikesFindAllUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    @ApiBody({type: PostsLikesDto})
    async create(@Body() body: PostsLikesDto) {
        return await this.postsLikesCreateUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.postsLikesFindAllUseCase.execute();
    }
}
