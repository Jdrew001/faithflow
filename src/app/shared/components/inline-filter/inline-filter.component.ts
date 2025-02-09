import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InlineFilterModel, InlineFilterType } from './model/inline-filter.model';

@Component({
  selector: 'app-inline-filter',
  templateUrl: './inline-filter.component.html',
  styleUrls: ['./inline-filter.component.scss'],
})
export class InlineFilterComponent {

  @Input() config: InlineFilterModel[] = [];
  @Output() onFilterChange = new EventEmitter<Record<string, any>>();

  isOpen = false;

  toggleFilter() {
    this.isOpen = !this.isOpen;
  }

  applyFilters() {
    const selectedFilters = this.config
      .filter(filter => filter.selectedOption) // Only include filters with a selected option
      .reduce((acc, filter) => {
        (acc as Record<string, any>)[filter.id] = filter.selectedOption;
        return acc;
      }, {} as Record<string, any>); // Start with an empty object

    this.onFilterChange.emit(selectedFilters);
    this.toggleFilter();
  }
}
