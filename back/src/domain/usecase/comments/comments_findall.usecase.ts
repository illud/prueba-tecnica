import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../../infraestructure/repository/comments/comments.repository'

@Injectable()
export class CommentsFindAllUseCase {
    constructor(private commentsRepository: CommentsRepository) { }

    async execute() {
        return await this.commentsRepository.findAll();
    }
}
