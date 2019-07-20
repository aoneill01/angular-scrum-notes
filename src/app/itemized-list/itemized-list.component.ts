import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemized-list',
  templateUrl: './itemized-list.component.html',
  styleUrls: ['./itemized-list.component.css']
})
export class ItemizedListComponent implements OnInit {

  @Input() items: string[];

  constructor() { }

  ngOnInit() {
  }

  formattedItems(): string[] {
    return this.items.map(item => `- ${item}`);
  }

}
