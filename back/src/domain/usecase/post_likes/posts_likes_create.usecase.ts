import { Injectable } from '@nestjs/common';
import { PostsLikesRepository } from '../../../infraestructure/repository/post_likes/post_likes.repository'

@Injectable()
export class PostsLikesCreateUseCase {
    constructor(private postsLikesRepository: PostsLikesRepository) { }

    async execute(data) {
        return await this.postsLikesRepository.create(data);
    }
}
