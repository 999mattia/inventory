import {Injectable} from '@angular/core';
import {InventoryObject} from './inventory.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InventoryService {
	public readonly API_URL = 'http://localhost:3000/inventory';

	constructor(private readonly httpClient: HttpClient) {}

	getInventory(): Observable<InventoryObject[]> {
		return this.httpClient.get<InventoryObject[]>(this.API_URL);
	}
}
