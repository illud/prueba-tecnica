import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async create(data) {
        return await this.postsRepository.create(data)
    }

    async findAll() {
        return await this.postsRepository.findAll();
    }

    async findAllUserPosts(userId) {
        return await this.postsRepository.findAllUserPosts(userId);
    }

    async findAllOtherUserPosts(userId) {
        return await this.postsRepository.findAllOtherUserPosts(userId);
    }

    async findAllILike(userId) {
        return await this.postsRepository.findAllILike(userId);
    }
}
