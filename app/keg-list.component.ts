import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="isTapped">Show Tapped</option>
      <option value="notTapped">Show Not Tapped</option>
    </select>
      <div class="keg" *ngFor="let currentKeg of childKegList | completeness:selectedCompleteness">
        <keg-display [keg]="currentKeg"></keg-display>
        <button class="btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
        <button class="btn" (click)="pourButtonHasBeenClicked(currentKeg)">Pour</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
  }
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  pourButtonHasBeenClicked(kegToPour: Keg) {
    kegToPour.pints = (( kegToPour.pints - 1 ));
  }
}
