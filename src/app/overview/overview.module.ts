import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {OverviewTableComponentComponent} from './overview-table-component/overview-table-component.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
	declarations: [OverviewComponent, OverviewTableComponentComponent],
	imports: [CommonModule, MatTableModule]
})
export class OverviewModule {}
