import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsFindAllUserPostsUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(userId: number) {
        return await this.postsRepository.findAllUserPosts(userId);
    }
}
