/** Container for dto interface */
export interface EntityContainerDto<T> {
  /** Main fields */
  fields: T;
  /** Personal key */
  pk: number;
}

/** Container for dto interface without pk */
export interface EntityContainerDtoWithoutPk<T> {
  /** Main fields */
  fields: T;
}
