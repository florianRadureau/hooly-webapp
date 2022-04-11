import { TestBed } from '@angular/core/testing';

import { CreateReservationsResolver } from './create-reservations.resolver';

describe('CreateReservationsResolver', () => {
  let resolver: CreateReservationsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CreateReservationsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
