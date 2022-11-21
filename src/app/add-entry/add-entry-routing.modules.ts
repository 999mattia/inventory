import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddEntryComponent} from './add-entry.component';

const routes: Routes = [
	{
		path: '',
		component: AddEntryComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddEntryRoutingModule {}
