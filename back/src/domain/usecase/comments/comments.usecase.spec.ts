import { Test, TestingModule } from '@nestjs/testing';
import { CommentsCreateUseCase } from './comments_create.usecase';

describe('CommentsService', () => {
  let service: CommentsCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsCreateUseCase],
    }).compile();

    service = module.get<CommentsCreateUseCase>(CommentsCreateUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
