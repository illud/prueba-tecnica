import { Test, TestingModule } from '@nestjs/testing';
import { PostsLikesUseCase } from './posts_likes.usecase';

describe('PostsLikesService', () => {
  let service: PostsLikesUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsLikesUseCase],
    }).compile();

    service = module.get<PostsLikesUseCase>(PostsLikesUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
