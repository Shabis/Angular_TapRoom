import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
  <div>
    <br>
    <input *ngIf="keg.tapped === true" type="checkbox" checked (click)="toggleTapped(false)"/>
    <input *ngIf="keg.tapped === false" type="checkbox" (click)="toggleTapped(true)"/>
    <label>Tapped</label>
    <br>
    <label>{{ keg.name }}</label>
    <br>
    <label>{{ "Price: $" + keg.price }}</label>
  </div>
  `
})
export class KegComponent {
  @Input() keg: Keg;
  toggleTapped(setCompleteness: boolean) {
    this.keg.tapped = setCompleteness;
  }
}
