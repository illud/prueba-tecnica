import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async create(data: UsersEntity) {
        return await this.prismaService.users.create(
            {
                data: {
                    avatar: data.avatar,
                    fullname: data.fullname,
                    age: data.age,
                    dateofborn: data.dateofborn,
                    email: data.email,
                    username: data.username,
                    password: data.password,
                    createdAt: new Date().toISOString()
                }
            }
        )
    }

    async update(data) {
        return await this.prismaService.users.update(
            {
                where: {
                    id: data.userId,
                },
                data: {
                    avatar: data.avatar,
                    fullname: data.fullname,
                    age: data.age,
                    dateofborn: data.dateofborn,
                    email: data.email
                }
            }
        )
    }

    async login(body) {
        const user = await this.prismaService.users.findFirst({
            where: {
                username: body.username,
            },
        });

        return user
    }

    async findAll() {
        return await this.prismaService.users.findMany();
    }

    async findOne(userId: number) {
        return await this.prismaService.users.findUnique({
            where: {
                id: userId
            }
        });
    }
}
