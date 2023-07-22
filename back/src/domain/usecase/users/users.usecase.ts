import { Injectable } from '@nestjs/common';
import { BcryptService } from '../../../utils/services/bcrypt/bcrypt.service';
import { JwtService } from '../../../utils/services/jwt/jwt.service';
import { UsersRepository } from '../../../infraestructure/repository/users/users.repository'

@Injectable()
export class UsersUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private bcryptService: BcryptService,
        private jwtService: JwtService) { }

    async create(data) {
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

    async update(data) {
        return await this.usersRepository.update(data)
    }

    async login(body) {
        const user = await this.usersRepository.login(body);

        const checkPassword = await this.bcryptService.compareHash(
            body.password,
            user.password,
        );

        if (checkPassword == true) {
            return {
                token: this.jwtService.generateToken(body.username),
                userId: user.id,
                userName: user.fullname
            };
        } else {
            return {
                "Error": "Datos incorrectos"
            };
        }
    }

    async findAll() {
        return await this.usersRepository.findAll();
    }

    async findOne(userId) {
        return await this.usersRepository.findOne(userId);
    }
}
