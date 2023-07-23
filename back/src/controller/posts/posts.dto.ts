import { ApiProperty } from "@nestjs/swagger";

export class PostsDto {
    @ApiProperty()
    description: string;
    @ApiProperty()
    userId: number;
    @ApiProperty()
    createdAt: string;
}

export class PostsMyPostsDto {
    @ApiProperty()
    userId: number;
}

export class PostsUpdateDto {
    @ApiProperty()
    postId: number;
    @ApiProperty()
    description: string;
}