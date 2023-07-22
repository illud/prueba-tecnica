import { Injectable } from '@nestjs/common';
import { CommentsLikesRepository } from '../../../infraestructure/repository/comments_likes/comments_likes.repository'

@Injectable()
export class CommentsLikesCreateUseCase {
    constructor(private commentsLikesRepository: CommentsLikesRepository) { }

    async execute(data) {
        return await this.commentsLikesRepository.create(data)
    }
}
