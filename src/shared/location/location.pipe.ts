import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'location'
})
export class LocationPipe implements PipeTransform {
	transform(value: string): string {
		let x = '';
		for (let i = 0; i < value.length; i++) {
			if (value[i] === '-') {
				x += ' : ';
			} else {
				x += value[i];
			}
		}
		return x;
	}
}
