import { TestBed } from '@angular/core/testing';

import { USERGuard } from './user.guard';

describe('USERGuard', () => {
  let guard: USERGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(USERGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
