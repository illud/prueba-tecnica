import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../../infraestructure/repository/comments/comments.repository'

@Injectable()
export class CommentsFindByIdUseCase {
    constructor(private commentsRepository: CommentsRepository) { }

    async execute(body) {
        return await this.commentsRepository.findAllById(body);
    }
}
