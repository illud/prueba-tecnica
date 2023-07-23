import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CommentsCreateUseCase } from '../../domain/usecase/comments/comments_create.usecase';
import { CommentsFindAllUseCase } from '../../domain/usecase/comments/comments_findall.usecase';
import { CommentsFindByIdUseCase } from '../../domain/usecase/comments/comments_findallbyid.usecase';
import { CommentsDto } from './comments.dto';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';
import {
    ApiBearerAuth,
    ApiBody,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private commentsCreateUseCase: CommentsCreateUseCase,
        private CommentsFindAllUseCase: CommentsFindAllUseCase,
        private CommentsFindByIdUseCase: CommentsFindByIdUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    @ApiBody({type: CommentsDto})
    async create(@Body() body: CommentsDto) {
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
