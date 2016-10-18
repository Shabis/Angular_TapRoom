import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'tap-room',
  template: `
  <div class="container">
    <h1>Keg Inventory</h1>
    <keg-list
      [childKegList]="masterKegList"
      (clickSender)="showDetails($event)"
     ></keg-list>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
      new Keg("Pilsner", "Widmer", 5, 4),
      new Keg("Red", "Oakshire", 5, 5),
      new Keg("Old Rasputin", "North Coast", 6, 9)
  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
