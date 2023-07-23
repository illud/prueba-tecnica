import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtService],
    }).compile();

    service = module.get<JwtService>(JwtService);
  });

  it('should generate token', () => {
    expect(service.generateToken('user')).toEqual(expect.anything());
  });

  it('should validate token', async () => {
    let token = service.generateToken('user');
    await expect(service.validateToken(token)).resolves.toEqual(true);
  });
});
