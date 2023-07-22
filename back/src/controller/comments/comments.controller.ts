import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CommentsCreateUseCase } from '../../domain/usecase/comments/comments_create.usecase';
import { CommentsFindAllUseCase } from '../../domain/usecase/comments/comments_findall.usecase';
import { CommentsFindByIdUseCase } from '../../domain/usecase/comments/comments_findallbyid.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('comments')
export class CommentsController {
    constructor(private commentsCreateUseCase: CommentsCreateUseCase,
        private CommentsFindAllUseCase: CommentsFindAllUseCase,
        private CommentsFindByIdUseCase: CommentsFindByIdUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body) {
        return await this.commentsCreateUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.CommentsFindAllUseCase.execute();
    }

    @UseGuards(AuthGuard)
    @Post('/filter')
    async findAllById(@Body() body) {
        return await this.CommentsFindByIdUseCase.execute(body);
    }
}
