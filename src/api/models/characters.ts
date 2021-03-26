import { ConstructorInitArg } from '../../utils/constructor-Init-arg';

/** Characters class */
export class Characters {
  /** Name */
  public name: string;
  /** Birth year format: "number"BBY */
  public birth: string;
  /** Eyes color */
  public eyes: string;
  /** Gender */
  public gender: string;
  /** Hair color */
  public hair: string;
  /** Height */
  public height: number;
  /** Home */
  public home: string;
  /** Mass */
  public mass: string;
  /** Skin color */
  public skin: string;
  /** Personal key */
  public pk: number;
  /** Id */
  public id: string;

  constructor(data: ConstructorInitArg<Characters>) {
    this.name = data.name;
    this.birth = data.birth;
    this.eyes = data.eyes;
    this.gender = data.gender;
    this.hair = data.hair;
    this.height = data.height;
    this.home = data.home;
    this.mass = data.mass;
    this.skin = data.skin;
    this.pk = data.pk;
    this.id = data.id;
  }
}
