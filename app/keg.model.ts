export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public pints = 124) { }
}
