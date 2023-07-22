import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../../infraestructure/repository/users/users.repository'

@Injectable()
export class UsersUpdateUseCase {
    constructor(
        private usersRepository: UsersRepository) { }

    async execute(data) {
        return await this.usersRepository.update(data)
    }
}
