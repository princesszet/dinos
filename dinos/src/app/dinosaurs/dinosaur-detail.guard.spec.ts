import { TestBed, async, inject } from '@angular/core/testing';

import { DinosaurDetailGuard } from './dinosaur-detail.guard';

describe('DinosaurDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosaurDetailGuard]
    });
  });

  it('should ...', inject([DinosaurDetailGuard], (guard: DinosaurDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
