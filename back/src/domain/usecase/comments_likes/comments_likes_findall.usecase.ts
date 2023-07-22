import { Injectable } from '@nestjs/common';
import { CommentsLikesRepository } from '../../../infraestructure/repository/comments_likes/comments_likes.repository'

@Injectable()
export class CommentsLikesFinAllUseCase {
    constructor(private commentsLikesRepository: CommentsLikesRepository) { }

    async execute() {
        return await this.commentsLikesRepository.findAll();
    }
}
