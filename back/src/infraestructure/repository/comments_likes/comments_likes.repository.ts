import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CommentsLikesEntity } from './comments_likes.entity'
@Injectable()
export class CommentsLikesRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async create(data: CommentsLikesEntity) {
        return await this.prismaService.comments_likes.create(
            {
                data: {
                    likes: data.likes,
                    commentId: data.commentId,
                    userId: data.userId,
                    createdAt: new Date().toISOString()
                }
            }
        )
    }

    async findAll() {
        return await this.prismaService.comments_likes.findMany();
    }
}
