import {Component, OnInit} from '@angular/core';
import {InventoryObject} from 'src/shared/inventory.model';
import {MatTableDataSource} from '@angular/material/table';
import {InventoryService} from '../../../shared/inventory.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	providers: [InventoryService]
})
export class OverviewComponent implements OnInit {
	dataSource: MatTableDataSource<InventoryObject> = new MatTableDataSource<InventoryObject>([]);

	constructor(private readonly inventoryService: InventoryService) {}

	ngOnInit(): void {
		this.inventoryService.getInventory().subscribe((inventory: InventoryObject[]) => (this.dataSource.data = inventory));
	}
}
