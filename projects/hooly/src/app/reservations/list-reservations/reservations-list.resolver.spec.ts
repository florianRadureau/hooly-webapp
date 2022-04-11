import { TestBed } from '@angular/core/testing';

import { ReservationsListResolver } from './reservations-list.resolver';

describe('ReservationsResolver', () => {
  let resolver: ReservationsListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReservationsListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
