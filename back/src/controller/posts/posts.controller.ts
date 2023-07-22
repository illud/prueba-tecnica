import { Controller, Post, Body, Get, Delete, Put, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PostsCreateUseCase } from '../../domain/usecase/posts/posts_create.usecase';
import { PostsFindAllUserPostsUseCase } from '../../domain/usecase/posts/posts_findalluserposts.usecase';
import { PostsFindAllOtherUserPostsUseCase } from '../../domain/usecase/posts/posts_findallotheruserposts.usecase';
import { PostsFindAllUseCase } from '../../domain/usecase/posts/posts_findall.usecase';
import { PostsFindAllILikeUseCase } from '../../domain/usecase/posts/posts_findalllike.usecase';
import { PostsDeletePostUseCase } from '../../domain/usecase/posts/posts_deletepost.usecase';
import { PostsUpdatePostUseCase } from '../../domain/usecase/posts/posts_updatepost.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';
import { PostsDto } from './posts.dto'
@Controller('posts')
export class PostsController {
    constructor(private postsCreateUseCase: PostsCreateUseCase,
        private postsFindAllUserPostsUseCase: PostsFindAllUserPostsUseCase,
        private postsFindAllOtherUserPostsUseCase: PostsFindAllOtherUserPostsUseCase,
        private postsFindAllUseCase: PostsFindAllUseCase,
        private postsFindAllILikeUseCase: PostsFindAllILikeUseCase,
        private postsDeletePostUseCase: PostsDeletePostUseCase,
        private postsUpdatePostUseCase: PostsUpdatePostUseCase) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body: PostsDto) {
        return await this.postsCreateUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Post('/my-posts')
    async findAllUserPosts(@Body() body) {
        return await this.postsFindAllUserPostsUseCase.execute(body.userId);
    }

    @UseGuards(AuthGuard)
    @Post('/other-posts')
    async findAllOtherUserPosts(@Body() body) {
        return await this.postsFindAllOtherUserPostsUseCase.execute(body.userId);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.postsFindAllUseCase.execute();
    }

    @UseGuards(AuthGuard)
    @Delete('/delete-post/:postId')
    async deletePost(@Param('postId', ParseIntPipe) postId: number) {
        return await this.postsDeletePostUseCase.execute(postId);
    }

    @UseGuards(AuthGuard)
    @Put('/update')
    async updatePost(@Body() body) {
        return await this.postsUpdatePostUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Post('i-like')
    async findAllILike(@Body() body) {
        return await this.postsFindAllILikeUseCase.execute(body.userId);
    }

}
