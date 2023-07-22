import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../../../infraestructure/repository/posts/posts.repository'
import { PostsModel } from './posts.model'

@Injectable()
export class PostsCreateUseCase {
    constructor(private postsRepository: PostsRepository) { }

    async execute(data: PostsModel) {
        return await this.postsRepository.create(data)
    }
}
