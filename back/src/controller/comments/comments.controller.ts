import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CommentsUseCase } from '../../domain/usecase/comments/comments.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('comments')
export class CommentsController {
    constructor(private commentsUseCase: CommentsUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body) {
        return await this.commentsUseCase.create(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.commentsUseCase.findAll();
    }

    @UseGuards(AuthGuard)
    @Post('/filter')
    async findAllById(@Body() body) {
        return await this.commentsUseCase.findAllById(body);
    }
}
