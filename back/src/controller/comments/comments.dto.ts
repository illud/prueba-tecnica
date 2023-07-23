import { ApiProperty } from "@nestjs/swagger";

export class CommentsDto {
    @ApiProperty()
    comment: string;
    @ApiProperty()
    postId: number;
    @ApiProperty()
    userId: number;
    @ApiProperty()
    createdAt: string;
}