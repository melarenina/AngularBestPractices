import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export function compareValidator(controlNameToCompare: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0) {
      return null; //Don't validate empty values
    }

    const controlToCompare = c.root.get(controlNameToCompare);

    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }

    return controlToCompare && controlToCompare.value !== c.value ? { compare: true } : null;
  };
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {

  @Input('compare') controlNameToCompare: string;

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {

    return compareValidator(this.controlNameToCompare)(c);

    // if (c.value === null || c.value.length === 0) {
    //   return null; //Don't validate empty values
    // }

    // const controlToCompare = c.root.get(this.controlNameToCompare);

    // if (controlToCompare) {
    //   const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
    //     c.updateValueAndValidity();
    //     subscription.unsubscribe();
    //   });
    // }

    // return controlToCompare && controlToCompare.value !== c.value ? { compare: true } : null;

  }

}
