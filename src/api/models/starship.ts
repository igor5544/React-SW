import { ConstructorInitArg } from '../../utils/constructor-Init-arg';

/** Starship class */
export class Starship {
  /** Megalight per hour (transport speed) */
  public mglt: number;
  /** Hyperdrive */
  public hyperdrive: number;
  /** Starshio class */
  public class: string;
  /** Personal key */
  public pk: number;
  /** Id */
  public id: string;

  constructor(data: ConstructorInitArg<Starship>) {
    this.mglt = data.mglt;
    this.hyperdrive = data.hyperdrive;
    this.class = data.class;
    this.pk = data.pk;
    this.id = data.id;
  }
}
