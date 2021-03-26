import { ConstructorInitArg } from '../../utils/constructor-Init-arg';

/** Vehicle class */
export class Vehicle {
  /** Vehicle class */
  public class: string;
  /** Personal key */
  public pk: number;
  /** Id */
  public id: string;

  constructor(data: ConstructorInitArg<Vehicle>) {
    this.class = data.class;
    this.pk = data.pk;
    this.id = data.id;
  }
}
