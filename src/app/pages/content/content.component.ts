import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { data } from '../../data/data';

@Component({
	selector: 'app-content',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css', './content.responsive.component.css'],
})
export class ContentComponent implements OnInit {
	photoCover: string = '';
	contentTitle: string = '';
	contentDescription: string = '';
	private id: string | null = '0';

	constructor(private route: ActivatedRoute) {}
	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id: string | null) {
		const result = data.filter((article) => article.id === id)[0];

		this.contentTitle = result.title;
		this.photoCover = result.photo;
		this.contentDescription = result.description;
	}
}
