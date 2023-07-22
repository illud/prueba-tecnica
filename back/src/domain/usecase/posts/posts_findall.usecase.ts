import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsFindAllUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute() {
        return await this.postsRepository.findAll();
    }
}
