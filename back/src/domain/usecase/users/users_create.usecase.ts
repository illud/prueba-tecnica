import { Injectable } from '@nestjs/common';
import { BcryptService } from '../../../utils/services/bcrypt/bcrypt.service';
import { UsersRepository } from '../../../infraestructure/repository/users/users.repository'

@Injectable()
export class UsersCreateUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private bcryptService: BcryptService) { }

    async execute(data) {
        const hashPassword = await this.bcryptService.generateSalt(data.password);

        return await this.usersRepository.create({
            avatar: data.avatar,
            fullname: data.fullname,
            age: data.age,
            dateofborn: data.dateofborn,
            email: data.email,
            username: data.username,
            password: hashPassword,
            createdAt: new Date().toISOString()
        }
        )
    }
}
