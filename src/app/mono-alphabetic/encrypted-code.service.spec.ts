/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EncryptedCodeService } from './encrypted-code.service';

describe('EncryptedCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncryptedCodeService]
    });
  });

  it('should ...', inject([EncryptedCodeService], (service: EncryptedCodeService) => {
    expect(service).toBeTruthy();
  }));
});
