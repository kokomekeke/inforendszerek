import { TestBed } from '@angular/core/testing';

import { KeszletService } from './keszlet.service';

describe('KeszletService', () => {
  let service: KeszletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeszletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
