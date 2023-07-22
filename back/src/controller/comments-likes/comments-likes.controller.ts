import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CommentsLikesUseCase } from '../../domain/usecase/comments_likes/comments_likes.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('comments-likes')
export class CommentsLikesController {
    constructor(private commentsLikesUseCase: CommentsLikesUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body) {
        return await this.commentsLikesUseCase.create(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.commentsLikesUseCase.findAll();
    }
}
