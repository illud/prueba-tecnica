import { ApiProperty } from "@nestjs/swagger";

export class PostsLikesDto {
    @ApiProperty()
    likes: boolean;
    @ApiProperty()
    postId: number;
    @ApiProperty()
    userId: number;
}