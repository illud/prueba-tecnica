import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsFindAllOtherUserPostsUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(userId: number) {
        return await this.postsRepository.findAllOtherUserPosts(userId);
    }
}
