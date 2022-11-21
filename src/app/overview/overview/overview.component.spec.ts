import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OverviewComponent} from './overview.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {InventoryService} from '../../../shared/inventory.service';
import {InventoryObject} from 'src/shared/inventory.model';
import {of} from 'rxjs';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;
	let inventoryService: InventoryService;

	const testInventory: InventoryObject[] = [
		{name: 'Test1', quantity: 1, location: 'somewhere1'},
		{name: 'Test2', quantity: 2, location: 'somewhere2'}
	];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [OverviewComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(OverviewComponent);
		inventoryService = TestBed.inject(InventoryService);
		jest.spyOn(inventoryService, 'getInventory').mockReturnValue(of(testInventory));

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set the dataSource on init', () => {
		expect(component.dataSource.data).toBe(testInventory);
	});

	it('should fetch the inventory on init', () => {
		expect(inventoryService.getInventory).toHaveBeenCalledTimes(1);
	});
});
