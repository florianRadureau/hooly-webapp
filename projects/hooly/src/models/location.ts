export class Location {
  id: number|undefined;
  name: string;

  constructor(name: string, id?: number, ) {
    this.id = id;
    this.name = name;
  }
}
