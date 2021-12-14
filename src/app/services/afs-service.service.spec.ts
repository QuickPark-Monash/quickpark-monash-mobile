import { TestBed } from '@angular/core/testing';

import { AfsServiceService } from './afs-service.service';

describe('AfsServiceService', () => {
  let service: AfsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
