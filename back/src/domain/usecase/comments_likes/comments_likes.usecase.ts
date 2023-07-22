import { Injectable } from '@nestjs/common';
import { CommentsLikesRepository } from '../../../infraestructure/repository/comments_likes/comments_likes.repository'

@Injectable()
export class CommentsLikesUseCase {
    constructor(private commentsLikesRepository: CommentsLikesRepository) { }

    async create(data) {
        return await this.commentsLikesRepository.create(data)
    }

    async findAll() {
        return await this.commentsLikesRepository.findAll();
    }
}
