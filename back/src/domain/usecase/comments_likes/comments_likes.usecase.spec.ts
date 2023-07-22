import { Test, TestingModule } from '@nestjs/testing';
import { CommentsLikesCreateUseCase } from './comments_likes_findall.usecase';

describe('CommentsLikesService', () => {
  let service: CommentsLikesCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsLikesCreateUseCase],
    }).compile();

    service = module.get<CommentsLikesCreateUseCase>(CommentsLikesCreateUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
