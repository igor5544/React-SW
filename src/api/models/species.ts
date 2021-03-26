import { ConstructorInitArg } from '../../utils/constructor-Init-arg';

/** Species class */
export class Species {
  /** Name */
  public name: string;
  /** Height */
  public height: number;
  /** Life */
  public life: number;
  /** Classification */
  public classification: string;
  /** Designation */
  public designation: string;
  /** Eye color */
  public eye: string;
  /** Hair color */
  public hair: string;
  /** Home pk */
  public home: string;
  /** Language */
  public language: string;
  /** Skin color */
  public skin: string;
  /** Personal key */
  public pk: number;
  /** Id */
  public id: string;

  constructor(data: ConstructorInitArg<Species>) {
    this.name = data.name;
    this.height = data.height;
    this.life = data.height;
    this.classification = data.classification ;
    this.designation = data.designation;
    this.eye = data.eye;
    this.hair = data.hair;
    this.home = data.home;
    this.language = data.language;
    this.skin = data.skin;
    this.pk = data.pk;
    this.id = data.id;
  }
}
