import { Truck } from "./truck";
import { Location } from "./location";

export class Reservation {
  id?: number;
  location: Location;
  truck: Truck;
  date: Date;

  constructor(location: Location, truck: Truck, date: Date, id?: number) {
    this.location = location;
    this.truck = truck;
    this.date = date;
    this.id = id;
  }
}
