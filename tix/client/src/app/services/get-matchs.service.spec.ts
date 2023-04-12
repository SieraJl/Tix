import { TestBed } from '@angular/core/testing';

import { GetMatchsService } from './get-matchs.service';

describe('GetMatchsService', () => {
  let service: GetMatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
