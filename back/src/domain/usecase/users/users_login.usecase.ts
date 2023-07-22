import { Injectable } from '@nestjs/common';
import { BcryptService } from '../../../utils/services/bcrypt/bcrypt.service';
import { JwtService } from '../../../utils/services/jwt/jwt.service';
import { UsersRepository } from '../../../infraestructure/repository/users/users.repository'

@Injectable()
export class UsersLoginUseCase {
    constructor(
        private usersRepository: UsersRepository,
        private bcryptService: BcryptService,
        private jwtService: JwtService) { }

    async execute(body) {
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
}
