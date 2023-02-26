import { Component } from '@angular/core';

@Component({
	selector: 'app-cruies-details',
	templateUrl: './cruies-details.component.html',
	styleUrls: ['./cruies-details.component.css'],
})
export class CruiesDetailsComponent {
	gridColumns = 2;

	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}
}
