import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {OverviewTableComponentComponent} from './overview-table-component/overview-table-component.component';
import {MatTableModule} from '@angular/material/table';
import {LocationPipe} from 'src/shared/location/location.pipe';
import {RouterModule} from '@angular/router';
import {ObButtonModule} from '@oblique/oblique';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [OverviewComponent, OverviewTableComponentComponent, LocationPipe],
	imports: [CommonModule, MatTableModule, RouterModule, ObButtonModule, MatButtonModule]
})
export class OverviewModule {}
