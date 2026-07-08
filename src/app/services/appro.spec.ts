import { TestBed } from '@angular/core/testing';

import { Appro } from './appro';

describe('Appro', () => {
  let service: Appro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Appro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
