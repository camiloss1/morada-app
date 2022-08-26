import { TestBed } from '@angular/core/testing';

import { MoradaPropertyApiService } from './morada-property-api.service';

describe('MoradaPropertyApiService', () => {
  let service: MoradaPropertyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradaPropertyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
