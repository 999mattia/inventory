import {Component, OnInit} from '@angular/core';
import {InventoryObject} from 'src/shared/inventory.model';
import {InventoryService} from 'src/shared/inventory.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	providers: [InventoryService]
})
export class OverviewComponent implements OnInit {
	dataSource: InventoryObject[] = [];

	constructor(private readonly inventoryService: InventoryService) {}

	ngOnInit(): void {
		this.dataSource = this.inventoryService.getInventory();
	}
}
