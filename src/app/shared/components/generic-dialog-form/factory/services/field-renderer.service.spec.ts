import { TestBed } from '@angular/core/testing';

import { FieldRendererService } from './field-renderer.service';

describe('FieldRendererService', () => {
  let service: FieldRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
