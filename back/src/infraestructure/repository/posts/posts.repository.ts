import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostsEntity } from './posts.entity'
@Injectable()
export class PostsRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async create(data: PostsEntity) {
        return await this.prismaService.posts.create(
            {
                data: {
                    description: data.description,
                    userId: data.userId,
                    createdAt: new Date().toISOString()
                }
            }
        )
    }

    async findAll() {
        return await this.prismaService.posts.findMany(
            {
                include: {
                    users: {

                    }
                },
                orderBy: {
                    id: 'desc'
                }
            }
        );
    }

    async findAllUserPosts(userId: number) {
        return await this.prismaService.posts.findMany(
            {
                where: {
                    userId: userId
                },
                include: {
                    users: {

                    }
                },
                orderBy: {
                    id: 'desc'
                }
            }
        );
    }

    async findAllOtherUserPosts(userId: number) {
        return await this.prismaService.posts.findMany(
            {
                where: {
                    userId: { notIn: [userId] }
                },
                include: {
                    users: {

                    }
                },
                orderBy: {
                    id: 'desc'
                }
            }
        );
    }

    async findAllILike(userId: number) {
        return await this.prismaService.posts_likes.findMany(
            {
                where: {
                    userId,
                    AND: {
                        likes: true
                    }
                },
                select: {
                    posts: {
                        include: {
                            users: {}
                        }
                    }
                },
                orderBy: {
                    id: 'desc'
                },
                take: 10,
            }
        );
    }
}
