import { Test, TestingModule } from '@nestjs/testing';
import { CommentsLikesUseCase } from './comments_likes.usecase';

describe('CommentsLikesService', () => {
  let service: CommentsLikesUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsLikesUseCase],
    }).compile();

    service = module.get<CommentsLikesUseCase>(CommentsLikesUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
