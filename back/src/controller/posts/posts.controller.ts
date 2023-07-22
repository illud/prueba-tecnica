import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { PostsUseCase } from '../../domain/usecase/posts/posts.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('posts')
export class PostsController {
    constructor(private postsUseCase: PostsUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body) {
        return await this.postsUseCase.create(body);
    }

    @UseGuards(AuthGuard)
    @Post('/my-posts')
    async findAllUserPosts(@Body() body) {
        return await this.postsUseCase.findAllUserPosts(body.userId);
    }

    @UseGuards(AuthGuard)
    @Post('/other-posts')
    async findAllOtherUserPosts(@Body() body) {
        return await this.postsUseCase.findAllOtherUserPosts(body.userId);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.postsUseCase.findAll();
    }

    @UseGuards(AuthGuard)
    @Post('i-like')
    async findAllILike(@Body() body) {
        return await this.postsUseCase.findAllILike(body.userId);
    }

}
