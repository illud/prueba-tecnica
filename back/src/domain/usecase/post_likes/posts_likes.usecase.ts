import { Injectable } from '@nestjs/common';
import { PostsLikesRepository } from '../../../infraestructure/repository/post_likes/post_likes.repository'

@Injectable()
export class PostsLikesUseCase {
    constructor(private postsLikesRepository: PostsLikesRepository) { }

    async create(data) {
        return await this.postsLikesRepository.create(data);
    }

    async findAll() {
        return await this.postsLikesRepository.findAll();
    }
}
