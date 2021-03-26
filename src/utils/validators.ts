/** Validator for passowrds in registrate form */
export const passwordsMatch: any = (value: string, form: any): boolean => (
  /** Check passords */
  value === form.parent.password
)
