import { TestBed } from '@angular/core/testing';

import { AfsService } from './afs.service';

describe('AfsServiceService', () => {
  let service: AfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
