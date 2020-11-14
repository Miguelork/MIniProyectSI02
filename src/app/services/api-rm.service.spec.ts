import { TestBed } from '@angular/core/testing';

import { ApiRMService } from './api-rm.service';

describe('ApiRMService', () => {
  let service: ApiRMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
