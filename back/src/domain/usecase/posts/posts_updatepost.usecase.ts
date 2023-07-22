import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'

@Injectable()
export class PostsUpdatePostUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(body) {
        return await this.postsRepository.update(body);
    }
}
