import { Test, TestingModule } from '@nestjs/testing';
import { PqService } from './pq.service';

describe('PqService', () => {
  let service: PqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PqService],
    }).compile();

    service = module.get<PqService>(PqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
