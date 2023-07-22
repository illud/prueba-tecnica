import { Injectable } from '@nestjs/common';
import { CommentsLikesRepository } from '../../../infraestructure/repository/comments_likes/comments_likes.repository'
import { CommentsLikesModel } from './comments_likes.model';

@Injectable()
export class CommentsLikesCreateUseCase {
    constructor(private commentsLikesRepository: CommentsLikesRepository) { }

    async execute(data: CommentsLikesModel) {
        return await this.commentsLikesRepository.create(data)
    }
}
