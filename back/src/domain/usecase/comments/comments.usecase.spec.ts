import { Test, TestingModule } from '@nestjs/testing';
import { CommentsUseCase } from './comments.usecase';

describe('CommentsService', () => {
  let service: CommentsUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsUseCase],
    }).compile();

    service = module.get<CommentsUseCase>(CommentsUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
