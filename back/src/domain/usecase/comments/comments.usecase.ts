import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../../infraestructure/repository/comments/comments.repository'

@Injectable()
export class CommentsUseCase {
    constructor(private commentsRepository: CommentsRepository) { }

    async create(data) {
        return await this.commentsRepository.create({
            comment: data.comment,
            postId: data.postId,
            userId: data.userId,
            createdAt: new Date().toISOString()
        })
    }

    async findAll() {
        return await this.commentsRepository.findAll();
    }

    async findAllById(body) {
        return await this.commentsRepository.findAllById(body);
    }
}
