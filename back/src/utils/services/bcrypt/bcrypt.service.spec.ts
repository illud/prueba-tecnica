import { Test, TestingModule } from '@nestjs/testing';
import { BcryptService } from './bcrypt.service';

describe('BcryptService', () => {
  let service: BcryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptService],
    }).compile();

    service = module.get<BcryptService>(BcryptService);
  });

  it('should encrypt password', async () => {
    await expect(service.generateSalt('roca123')).resolves.toEqual(expect.anything());
  });

  it('should compareHash', async () => {
    await expect(service.compareHash('roca123', '$2b$10$pLOIYBZl3jIg8kzUC5HCzejSbsPGQtbvlReFNzqszZKSPX6fmGSWe')).resolves.toEqual(true);
  });
});
