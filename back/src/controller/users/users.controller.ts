import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersCreateUseCase } from '../../domain/usecase/users/users_create.usecase';
import { UsersLoginUseCase } from '../../domain/usecase/users/users_login.usecase';
import { UsersUpdateUseCase } from '../../domain/usecase/users/users_update.usecase';
import { UsersFindAllUseCase } from '../../domain/usecase/users/users_findall.usecase';
import { UsersFindOneUseCase } from '../../domain/usecase/users/users_findone.usecase';
import { AuthGuard } from '../../utils/services/auth/jwt.auth.guard';
import { UsersDto, UsersLoginDto, UsersUpdateDto, UsersProfileDto } from './users.dto'
import {
    ApiBearerAuth,
    ApiBody,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersCreateUseCase: UsersCreateUseCase,
        private usersLoginUseCase: UsersLoginUseCase,
        private usersUpdateUseCase: UsersUpdateUseCase,
        private usersFindAllUseCase: UsersFindAllUseCase,
        private usersFindOneUseCase: UsersFindOneUseCase) { }

    @Post()
    @ApiBody({ type: UsersDto })
    async create(@Body() body: UsersDto) {
        return await this.usersCreateUseCase.execute(body);
    }

    @Post('/login')
    @ApiBody({ type: UsersLoginDto })
    login(@Body() body: UsersLoginDto) {
        return this.usersLoginUseCase.execute(body);
    }

    @Post('/update')
    @ApiBody({ type: UsersUpdateDto })
    update(@Body() body: UsersUpdateDto) {
        return this.usersUpdateUseCase.execute(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return await this.usersFindAllUseCase.execute();
    }

    @Post('/profile')
    @ApiBody({ type: UsersProfileDto })
    profile(@Body() body: UsersProfileDto) {
        return this.usersFindOneUseCase.execute(body.userId);
    }

    @UseGuards(AuthGuard)
    @Get('/check-token')
    async checkToken() {
        return {
            "token": true
        };
    }
}
