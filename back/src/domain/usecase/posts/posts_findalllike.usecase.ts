import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsFindAllILikeUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(userId: number) {
        return await this.postsRepository.findAllILike(userId);
    }
}
