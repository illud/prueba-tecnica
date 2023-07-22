import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsDeletePostUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(postId: number) {
        return await this.postsRepository.delete(postId);
    }
}
