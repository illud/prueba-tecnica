import { Injectable } from '@nestjs/common';
import { PostsLikesRepository } from '../../../infraestructure/repository/post_likes/post_likes.repository'
import { PostsLikesModel } from './posts_likes.model'

@Injectable()
export class PostsLikesCreateUseCase {
    constructor(private postsLikesRepository: PostsLikesRepository) { }

    async execute(data: PostsLikesModel) {
        return await this.postsLikesRepository.create(data);
    }
}
