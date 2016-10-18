import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
  <div>
    <input *ngIf="keg.tapped === true" type="checkbox" checked (click)="toggleTapped(false)"/>
    <input *ngIf="keg.tapped === false" type="checkbox" (click)="toggleTapped(true)"/>
    <label>Tapped</label>
    <br>
    <label>{{ keg.name }}</label>
    <br>
    <label *ngIf="keg.price<5" class="low">{{ "Price: $" + keg.price }}</label>
    <label *ngIf="keg.price>=5" removeClass="low" class="high">{{ "Price: $" + keg.price }}</label>
    <br>
    <label *ngIf="keg.pints<=10" class="warning">{{ "Pints Remaining: " + keg.pints }}</label>
    <label *ngIf="keg.pints>10">{{ "Pints Remaining: " + keg.pints }}</label>
  </div>
  `
})
export class KegComponent {
  @Input() keg: Keg;
  toggleTapped(setCompleteness: boolean) {
    this.keg.tapped = setCompleteness;
  }
}
