import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
    @ApiProperty()
    avatar: string;
    @ApiProperty()
    fullname: string;
    @ApiProperty()
    age: number;
    @ApiProperty()
    dateofborn: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    createdAt: string;
}

export class UsersLoginDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}

export class UsersUpdateDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    avatar: string;
    @ApiProperty()
    fullname: string;
    @ApiProperty()
    age: number;
    @ApiProperty()
    dateofborn: string;
    @ApiProperty()
    email: string;
}

export class UsersProfileDto {
    @ApiProperty()
    userId: number;
}
