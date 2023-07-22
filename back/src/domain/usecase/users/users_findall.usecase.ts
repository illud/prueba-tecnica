import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../../infraestructure/repository/users/users.repository'

@Injectable()
export class UsersFindAllUseCase {
    constructor(
        private usersRepository: UsersRepository) { }

    async execute() {
        return await this.usersRepository.findAll();
    }
}
