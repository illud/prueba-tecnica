import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../../infraestructure/repository/users/users.repository'

@Injectable()
export class UsersFindOneUseCase {
    constructor(
        private usersRepository: UsersRepository) { }

    async execute(userId) {
        return await this.usersRepository.findOne(userId);
    }
}
