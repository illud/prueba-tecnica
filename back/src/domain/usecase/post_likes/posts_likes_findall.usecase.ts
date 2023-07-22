import { Injectable } from '@nestjs/common';
import { PostsLikesRepository } from '../../../infraestructure/repository/post_likes/post_likes.repository'

@Injectable()
export class PostsLikesFindAllUseCase {
    constructor(private postsLikesRepository: PostsLikesRepository) { }

    async execute() {
        return await this.postsLikesRepository.findAll();
    }
}
