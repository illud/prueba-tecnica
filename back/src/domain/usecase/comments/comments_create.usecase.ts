import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../../infraestructure/repository/comments/comments.repository'
import { CommentsModel } from './comments.model';

@Injectable()
export class CommentsCreateUseCase {
    constructor(private commentsRepository: CommentsRepository) { }

    async execute(data: CommentsModel) {
        return await this.commentsRepository.create({
            comment: data.comment,
            postId: data.postId,
            userId: data.userId,
            createdAt: new Date().toISOString()
        })
    }
}
