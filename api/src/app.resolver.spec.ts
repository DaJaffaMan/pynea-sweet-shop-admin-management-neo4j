import { Test, TestingModule } from '@nestjs/testing';
import { AppResolver } from './app.resolver';

describe('AppResolver', () => {
  let appResolver: AppResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppResolver],
    }).compile();

    appResolver = app.get<AppResolver>(AppResolver);
  });

  describe('root', () => {

    it('should be defined"', () => {
      expect(appResolver).toBeDefined();
    });

    it('should return "Hello World!"', () => {
      expect(appResolver.health()).toEqual('up!');
    });
  });
});
