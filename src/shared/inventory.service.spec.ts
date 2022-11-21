import {TestBed} from '@angular/core/testing';
import {InventoryService} from './inventory.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

describe('InventoryServiceService', () => {
	let service: InventoryService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
		service = TestBed.inject(InventoryService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call the correct URL to get the inventory', done => {
		const httpClient = TestBed.inject(HttpClient);

		jest.spyOn(httpClient, 'get').mockReturnValue(of([]));

		service.getInventory().subscribe(() => {
			expect(httpClient.get).toBeCalledWith('http://localhost:3000/inventory');
			done();
		});
	});
});
