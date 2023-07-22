import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../../infraestructure/repository/comments/comments.repository'

@Injectable()
export class CommentsCreateUseCase {
    constructor(private commentsRepository: CommentsRepository) { }

    async execute(data) {
        return await this.commentsRepository.create({
            comment: data.comment,
            postId: data.postId,
            userId: data.userId,
            createdAt: new Date().toISOString()
        })
    }
}
