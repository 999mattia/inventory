import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ObUnknownRouteModule} from '@oblique/oblique';
import {OverviewComponent} from './overview/overview/overview.component';

const routes: Routes = [
	{path: '', redirectTo: 'overview', pathMatch: 'full'},
	{path: 'overview', component: OverviewComponent},
	{path: 'add', loadChildren: () => import('./add-entry/add-entry.module').then(m => m.AddEntryModule)},
	{path: '**', redirectTo: 'unknown-route'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes), ObUnknownRouteModule],
	exports: [RouterModule]
})
export class AppRoutingModule {}
