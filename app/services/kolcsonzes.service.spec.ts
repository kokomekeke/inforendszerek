import { TestBed } from '@angular/core/testing';

import { KolcsonzesService } from './kolcsonzes.service';

describe('KolcsonzesService', () => {
  let service: KolcsonzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolcsonzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
