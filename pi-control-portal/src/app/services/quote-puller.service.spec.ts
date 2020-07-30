import { TestBed } from '@angular/core/testing';

import { QuotePullerService } from './quote-puller.service';

describe('QuotePullerService', () => {
    let service: QuotePullerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(QuotePullerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
