import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CommentsEntity } from './comments.entity'

@Injectable()
export class CommentsRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async create(data: CommentsEntity) {
        return await this.prismaService.comments.create(
            {
                data: {
                    comment: data.comment,
                    postId: data.postId,
                    userId: data.userId,
                    createdAt: new Date().toISOString()
                }
            }
        )
    }

    async findAll() {
        return await this.prismaService.comments.findMany();
    }

    async findAllById(body) {
        return await this.prismaService.comments.findMany({
            where: {
                postId: body.postId
            },
            include: {
                users: {

                }
            },
            orderBy: {
                id: 'desc'
            }
        });
    }
}
