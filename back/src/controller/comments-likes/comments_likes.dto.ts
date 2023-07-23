import { ApiProperty } from "@nestjs/swagger";

export class CommentsLikesDto {
    @ApiProperty()
    likes: boolean;
    @ApiProperty()
    commentId: number;
    @ApiProperty()
    userId: number;
    @ApiProperty()
    createdAt: string;
}