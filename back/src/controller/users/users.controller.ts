import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersUseCase } from '../../domain/usecase/users/users.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersUseCase: UsersUseCase) { }

    @Post()
    async create(@Body() body) {
        return await this.usersUseCase.create(body);
    }

    @Post('/login')
    login(@Body() body) {
        return this.usersUseCase.login(body);
    }

    @Post('/update')
    update(@Body() body) {
        return this.usersUseCase.update(body);
    }

    @Post('/profile')
    profile(@Body() body) {
        return this.usersUseCase.findOne(body.userId);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.usersUseCase.findAll();
    }

    @UseGuards(AuthGuard)
    @Get('/check-token')
    async checkToken() {
        return {
            "token": true
        };
    }
}
