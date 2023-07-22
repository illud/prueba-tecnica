import { Test, TestingModule } from '@nestjs/testing';
import { PostsCreateUseCase } from './posts_create.usecase';

describe('PostsService', () => {
  let service: PostsCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsCreateUseCase],
    }).compile();

    service = module.get<PostsCreateUseCase>(PostsCreateUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
