import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationService } from './basic-authentication.service';

describe('HardCodedAuthenticationService', () => {
  let service: BasicAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
