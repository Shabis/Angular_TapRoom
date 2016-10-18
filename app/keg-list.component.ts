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
    <div *ngFor="let currentKeg of childKegList | completeness:selectedCompleteness">
      <keg-display [keg]="currentKeg"></keg-display>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
      <button (click)="pourButtonHasBeenClicked(currentKeg)">Pour</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  pourButtonHasBeenClicked(kegToPour: Keg) {
    this.clickSender.emit(kegToPour);
      kegToPour.pints = (( kegToPour.pints - 1 ));
  }
}
