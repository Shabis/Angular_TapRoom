import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div id="newKeg">
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Keg Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Keg Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Keg ABV:</label>
      <input #newAbv>
      <br>
      <button class="btn" (click)="
        addClicked(newName.value, newBrand.value, newPrice.value, newAbv.value);
        newName.value='';
        newBrand.value='';
        newPrice.value='';
        newAbv.value='';
      ">Add</button>
    </div>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
