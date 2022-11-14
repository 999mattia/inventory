import {Injectable} from '@angular/core';
import {InventoryObject} from './inventory.model';

@Injectable({
	providedIn: 'root'
})
export class InventoryService {
	getInventory(): InventoryObject[] {
		return [{name: 'Test', quantity: 42, location: 'somewhere'}];
	}
}
