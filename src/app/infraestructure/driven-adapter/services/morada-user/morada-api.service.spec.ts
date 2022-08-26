import { TestBed } from '@angular/core/testing';

import { MoradaUserApiService } from './morada-user-api.service';

describe('MoradaApiService', () => {
  let service: MoradaUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradaUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
