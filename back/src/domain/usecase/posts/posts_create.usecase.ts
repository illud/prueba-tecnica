import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsCreateUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(data) {
        return await this.postsRepository.create(data)
    }
}
