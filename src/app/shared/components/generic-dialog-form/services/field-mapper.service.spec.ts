import { TestBed } from '@angular/core/testing';

import { FieldMapperService } from './field-mapper.service';

describe('FieldMapperService', () => {
  let service: FieldMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
