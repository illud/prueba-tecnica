import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CommentsLikesCreateUseCase } from '../../domain/usecase/comments_likes/comments_likes_create.usecase';
import { CommentsLikesFinAllUseCase } from '../../domain/usecase/comments_likes/comments_likes_findall.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';
import { CommentsLikesDto } from './comments_likes.dto';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiProperty,
    ApiBody,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('comments-likes')
@Controller('comments-likes')
export class CommentsLikesController {
    constructor(private cmmentsLikesCreateUseCase: CommentsLikesCreateUseCase,
        private commentsLikesFinAllUseCase: CommentsLikesFinAllUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body: CommentsLikesDto) {
        return await this.cmmentsLikesCreateUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.commentsLikesFinAllUseCase.execute();
    }
}
