import {Component, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {InventoryObject} from 'src/shared/inventory.model';

@Component({
	selector: 'app-overview-table-component',
	templateUrl: './overview-table-component.component.html',
	styleUrls: ['./overview-table-component.component.scss']
})
export class OverviewTableComponentComponent {
	displayedColumns: string[] = ['name', 'quantity', 'location'];

	@Input() dataSource: InventoryObject[] = [];
}
