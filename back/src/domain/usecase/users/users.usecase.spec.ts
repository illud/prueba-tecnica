import { Test, TestingModule } from '@nestjs/testing';
import { UsersUseCase } from './users_create.usecase';

describe('UsersService', () => {
  let usersUseCase: UsersUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersUseCase],
    }).compile();

    usersUseCase = module.get<UsersUseCase>(UsersUseCase);
  });

  it('should be defined', () => {
    expect(usersUseCase).toBeDefined();
  });
});
